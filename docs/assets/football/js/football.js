   /* check orientation */
   function checkOrientation() {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    var isShow = (window.matchMedia('(max-width:999px) and (orientation:landscape)').matches);
    if (isMobile) {
        if (isShow){
            $('.orientation').hide();
        } else {
            $('.orientation').show();
        }
    } else {
        $('.orientation').hide();
    }
}

function format(value) {
    return (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function startTimer(value) {
    var display = document.querySelector('#time');
    var duration = value || 60;
    var timer = duration, seconds;
    timer--;
    var timerInt = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // // console.log(seconds)
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(timerInt);
        }
    }, 1000);
}
var levelData;
$(document).ready(function () {
    checkOrientation();
    $(window).on('resize orientationchange', function(){
        checkOrientation();
    });
    // when we have api data
    var levelData = level2Obj;
    setInfoValue(levelData);
   function setInfoValue(level){
    if(level && level.data) {
        if (level.data.globalConfig != "") {
            var quickBet = level.data.globalConfig.quickBet.split(',');
            if (quickBet.length > 0) {
                quickBet.forEach((item, index) => {
                    $('.betvalue').append('<p class="btn-bet bet'+(index+1)+'"">'+item+'</p>');
                })
            }
            $(document).on('click', '.btn-bet', function(e){
                $('.btn-bet').removeClass('active');
                $(e.target).addClass('active');
            })
            $('.winBet').html("maximum "+ format(level.data.globalConfig.maxWin) +" winning amount");
            $('.gameBalance').html("IDR "+ format(level.data.mainBalance));
            // $('.gameBalance').html("");
            $('#stakeAmount').attr('min', 0);/* level.data.globalConfig.minBet */
            $('#stakeAmount').val(level.data.globalConfig.minBet);
            $('#stakeAmount').attr('max', level.data.globalConfig.maxBet);
        }
    }
   }
    $('.stakeDown').on('click', function(e) {
        document.getElementById('stakeAmount').stepDown();
    });
    $('.stakeUp').on('click', function(e) {
        document.getElementById('stakeAmount').stepUp();
    });
    $('.betvalue p').on('click', function(e) {
        var selectedAmount = $(e.target).text();
        $('#stakeAmount').val(selectedAmount);
    })
    // $(document).on('change', function(e){
    //     // console.log(e);
    // })
    // let  status = localStorage.getItem('goalKeeperVisible');
    // if(status == null){
    //     localStorage.setItem('goalKeeperVisible', true);
    // } else{
    //     localStorage.setItem('goalKeeperVisible', status);

    // }
    // let href = window.location.href.split('=');
    // let status = href.pop();
    const urlParams = new URLSearchParams(window.location.search);
    var status = urlParams.get('status') || false;
    if(!status){
        var queryParams = new URLSearchParams(window.location.search);
            queryParams.set("status", 1);
            window.location.href = window.location.href.split('?')[0]+'?'+queryParams.toString();
    }
    // console.log(status);
    status = status ? Number(status): 0;
    // console.log(status);

    status = status >= 1 ? status-1: 0;
    // console.log(status);

    status = status < sendOrderObj.length ? status: 0;
    var indexVal = status == 1 || status > sendOrderObj.length-1 ? 0: status-1;
    // console.log(status, indexVal, 'indexVal');
    // status = 1;
    var soObj = sendOrderObj[status];

    // window.location.href = href;

    var gkHit = soObj.data.gkHit == "N"? 0: 100;
    var config = soObj.data.nextRoundsConfig.colorConfig;
    var roundsNum = soObj.data.nextRoundsConfig.roundsNum;
    var guardPos = soObj.data.nextRoundsConfig.guardPos;
    var hitOdds = soObj.data.hitOdds;
    var gkOdd = soObj.data.nextRoundsConfig.gkOdd;
    var guardHit = soObj.data.guardHit;
    var gkHit = soObj.data.gkHit;
    console.clear();
    console.log('roundsNum => ',roundsNum);
    console.log('guardPos => ',guardPos);
    console.log('hitOdds => ',hitOdds);
    console.log('gkOdd => ',gkOdd);
    console.log('guardHit => ',guardHit);
    console.log('gkHit => ',gkHit);

    // console.log(hitOdds , 'hitOdds');
    var sampleCode = [
    {id: 0, probability: soObj.data.gkHit == "N" ?gkHit: 100, value: 8, color: 'O'}, 
    {id: 1, probability: soObj.data.gkHit == "N" ?gkHit: 80, value: 3,  color: 'G'},
    {id: 2, probability: soObj.data.gkHit == "N" ?gkHit: 60, value: 8,  color: 'O'},
    {id: 3, probability: soObj.data.gkHit == "N" ?gkHit: 100, value: 3,  color: 'B'},
    {id: 4, probability: soObj.data.gkHit == "N" ?gkHit: 75, value: 1.2,  color: 'Y'},
    {id: 5, probability: soObj.data.gkHit == "N" ?gkHit: 75, value:1.5,  color: 'B'},
    {id: 6, probability: soObj.data.gkHit == "N" ?gkHit: 100, value: 0.5,  color: 'W'},
    {id: 7, probability: soObj.data.gkHit == "N" ?gkHit: 80, value: 0.5,  color: 'W'},
    {id: 8, probability: soObj.data.gkHit == "N" ?gkHit: 60, value: 0.5,  color: 'W'},
    {id: 9, probability: soObj.data.gkHit == "N" ?gkHit: 100, value: 0.2,  color: 'D'}
];

    sampleCode.forEach((k)=>{
        let index = config.findIndex(l => k.color == l.color);
        if(index > -1) 
        k.value = config[index].odds;
    });

    // console.log(sampleCode, 'dsamplds');
    if(status == 0){
        localStorage.setItem('winAmt', 0);

    }
    var score = localStorage.getItem('winAmt');
    if(score ){

        setScore(score, true);
    }
    // console.log(status, 'status');
    function setScore(val, isOnload){
       
        var stake = $('#stakeAmount').val();
        stake = (typeof(stake) != "number") ? ( !isNaN(stake) ? Number(stake) : 0 ) : stake;
        var previousAmt = $('.winAmount').text();
        previousAmt = (typeof(previousAmt) != "number") ? ( !isNaN(previousAmt) ? Number(previousAmt) : 0 ) : previousAmt;

        var winAmt = (val * stake) + Number(previousAmt);
        if(status == 0){
            $('.winAmount').html(0);
        } else{
            $('.winAmount').html(winAmt);
        }
        localStorage.setItem('winAmt', winAmt);
        $('.scoreValue').text(val);
        if(!isOnload){
            $('.showScore').show();
            setTimeout(function() {
                $('.showScore').hide();
            }, 2000);
        }
    }
    // && soObj.data.gkHit == 'Y'? true: false
    var oMain = new CMain({
        goalKeeperVisible: !!(roundsNum > 1), // toggle visibility
        Level_status:status,
        area_goal_prop: sampleCode,
        roundsNum: roundsNum,
        hitOdds: hitOdds,
        gkOdd: gkOdd,
        guardHit: !!(guardHit == 'Y'),
        gkHit: !!(gkHit == 'Y'),
        guardPos: guardPos,
        area_goal: [
            {id: 0, probability: 100, value: 8}, 
            {id: 1, probability: 80, value: 3},
            {id: 2, probability: 60, value: 8},
            {id: 3, probability: 80, value: 3},
            {id: 4, probability: 100, value: 1.2},
            {id: 5, probability: 75, value:3},
            {id: 6, probability: 75, value:0.5},
        ], 
                   //PROBABILITY AREA GOALS START TO LEFT UP TO RIGHT DOWN 
        //0 1 2 3 4
        //5 6 7 8 9
        //10 11 12 13 14
        num_of_penalty: 5000, //MAX NUMBER OF PENALTY FOR END GAME
        multiplier_step: 0, //INCREASE MULTIPLIER EVERY GOAL
        fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        num_levels_for_ads: 2//NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
                //////// THIS FEATURE  IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN.
    });
    $(oMain).on("start_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartSession();
        }
    });

    $(oMain).on("end_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndSession();
        }
    });

    $(oMain).on("start_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartLevel({level: iLevel});
        }
    });

    $(oMain).on("restart_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeRestartLevel({level: iLevel});
        }
    });

    $(oMain).on("end_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndLevel({level: iLevel});
        }
    });

    $(oMain).on("save_score", function (evt, iScore, szMode) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeSaveScore({score: iScore, mode: szMode});
        }
    });
    $(oMain).on("but_play", function (evt) {
        startTimer(Number(levelData.data.globalConfig.countDown));
    });
    $(oMain).on("odd_point", function (evt, val) {
        let odds = document.querySelectorAll('.show-odd-cont');
        odds.forEach((k)=>{
            if(k.style) k.style.display = val? 'block': 'none';
        })
    });
    $(oMain).on("goal_score", function (evt, val) {
       setScore(val, false);
    //    alert(val, 'score');
        setTimeout(()=>{
            var queryParams = new URLSearchParams(window.location.search);
    var s = urlParams.get('status') || false;
            s = Number(s);
            if(s < sendOrderObj.length){
                queryParams.set("status",++s);

            } else{
                queryParams.set("status",1);

            }

            window.location.href = window.location.href.split('?')[0]+'?'+queryParams.toString();
        }, 2000)
        // startTimer(Number(levelData.data.globalConfig.countDown));
    });

    $(oMain).on("show_interlevel_ad", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShowInterlevelAD();
        }
    });

    $(oMain).on("share_event", function (evt, iScore) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShareEvent({img: TEXT_SHARE_IMAGE,
                title: TEXT_SHARE_TITLE,
                msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1});
        }
    });


    if (isIOS()) {
        setTimeout(function () {
            sizeHandler();
        }, 200);
    } else {
        sizeHandler();
    }
});
