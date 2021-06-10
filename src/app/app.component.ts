import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import {obj} from 'src/assets/football/js/level';
import {mainObj } from 'src/assets/football/js/main_old';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'free-kick-angular';
  levelData:any = obj.level2Obj;    
  sendOrderObj = obj.sendOrderObj;
     oMain:any;
        status:any;
        rounds = 0;
        enablePlay = true;
        currentRound = 0;
        timerInt:any;
        timer:any;
        gameBalance: any = 0;
        popupContShow: boolean = false;
        cashoutShow: boolean = false;
        quitShow: boolean = false;
        fundsShow: boolean = false;
        timesupShow: boolean = false;
        earnedShow: boolean = false;
constructor() {}
     /* check orientation */
     checkOrientation() {
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
  
  format(value) {
      return (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
  startTimer(value) {
      var display:any = document.querySelector('#time');
      var duration:any = value || 60;
      this.timer = Number(duration);
      var seconds:any;
      this.timer--;
      this.timerInt = setInterval(() => {
          let c:any = this.timer % 60;
          seconds = parseInt(c, 10);
          seconds = seconds < 10 ? "0" + seconds : seconds;
          // // console.log(seconds)
          display.textContent = seconds;

          if (seconds <= 15) {
              $("#time, #seconds").addClass('alert-red').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
          }
          if (--this.timer < 0) {
              display.textContent = "00";
            this.timer = duration;
          this.resetTimer();
          }
        //   localStorage.setItem('seconds', JSON.stringify(seconds));
          
      }, 1000);
  }

  resetTimer(isNext?){
      clearInterval(this.timerInt);
      if (isNext) {
        // let _sec = localStorage.getItem('seconds');
        setTimeout(() => {
            this.startTimer(60);
        }, 3000);
      } else {
        this.resetPopup();
        this.popupContShow=!this.popupContShow;
        this.timesupShow=!this.timesupShow
      }
  }

  ngAfterViewInit(){

      this.checkOrientation();
      $(window).on('resize orientationchange', ()=>{
          this.checkOrientation();
        });
        // when we have api data
       this.callMethod(0);
     this.setInfoValue(this.levelData);
      $('.close-popup').on('click', function () {
          $('.popup-cont').hide();
      })
      $('.game-info').on('click', function () {
          $('.header-cont button').toggleClass('active');
          $('.popup-body').hide();
          $('.game-info-content').show();
      });
      $('.instruction').on('click', function () {
          $('.header-cont button').toggleClass('active');
          $('.popup-body').hide();
          $('.instruction-content').show();
      });
      $('.stakeDown').on('click',(e) => {
          let sd:any = document.getElementById('stakeAmount');
          sd && sd.stepDown();
      });
      $('.stakeUp').on('click', (e)=> {
          let sd:any = document.getElementById('stakeAmount');
          sd && sd.stepUp();
      });
      $('.betvalue p').on('click', (e)=> {
          var selectedAmount = $(e.target).text();
          $('#stakeAmount').val(selectedAmount);
      })
      // $(document).on('change', function(e){
      //     // console.log(e);
      // })
      // let  this.status = localStorage.getItem('goalKeeperVisible');
      // if(this.status == null){
      //     localStorage.setItem('goalKeeperVisible', true);
      // } else{
      //     localStorage.setItem('goalKeeperVisible', this.status);
  
      // }
      // let href = window.location.href.split('=');
      // let this.status = href.pop();
      const urlParams = new URLSearchParams(window.location.search);
      this.status = urlParams.get('status') || false;
      if(!this.status){
          var queryParams:any = new URLSearchParams(window.location.search);
              queryParams.set("status", 1);
              window.location.href = window.location.href.split('?')[0]+'?'+queryParams.toString();
      }
      // console.log(this.status);
      this.status = this.status ? Number(this.status): 0;
      // console.log(this.status);
  
      this.status = this.status >= 1 ? this.status-1: 0;
      // console.log(this.status);
  
      this.status = this.status < this.sendOrderObj.length ? this.status: 0;
      var indexVal = this.status == 1 || this.status > this.sendOrderObj.length-1 ? 0: this.status-1;
      // console.log(this.status, indexVal, 'indexVal');
      // this.status = 1;
    
      // console.log(sampleCode, 'dsamplds');
      if(this.status == 0){
          localStorage.setItem('winAmt', JSON.stringify(0));
  
      }
      var score = localStorage.getItem('winAmt');
      if(score ){
  
          this.setScore(JSON.parse(score), true);
      }
      // console.log(this.status, 'this.status');
    
    
  
    //   $(oMain).on("show_interlevel_ad", (evt) {
    //       if (getParamValue('ctl-arcade') === "true") {
    //           parent.__ctlArcadeShowInterlevelAD();
    //       }
    //   });
  
    //   $(oMain).on("share_event", (evt, iScore) {
    //       if (getParamValue('ctl-arcade') === "true") {
    //           parent.__ctlArcadeShareEvent({img: TEXT_SHARE_IMAGE,
    //               title: TEXT_SHARE_TITLE,
    //               msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
    //               msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1});
    //       }
    //   });
  
  
      if (mainObj.isIOS()) {
          setTimeout(()=> {
            mainObj.sizeHandler();
          }, 200);
      } else {
        mainObj.sizeHandler();
      }
  }

  toggleOddContent(roundsNum) {
    $('.current-level').html(roundsNum);
    if (roundsNum == 1) {
        $('.show-level1').toggle();
    } else if (roundsNum == 2) {
        $('.show-level1').toggle();
        $('.show-level2').toggle();
    } else if (roundsNum >= 3) {
        $('.show-level1').toggle();
        $('.show-level2').toggle();
        $('.show-level3').toggle();
    }

  }

  callMethod(status, s?){
    let stakeAmount:any = $('#stakeAmount').val();
    if (s && (stakeAmount < 1000 || this.gameBalance < 1000)) {
        alert("Minimum bet amount is 1000 IDR");
        return;
    }
      if(s){
        this.enablePlay=false;
        $("#timer").show();
        this.startTimer(Number(this.levelData.data.globalConfig.countDown));
        $('.show-odds, .show-odd-cont').hide();
        this.toggleOddContent(this.currentRound);
        $('.show-odds').show();
        setTimeout(()=>{this.toggleOddContent(this.currentRound);}, 2000)
      }
    //   status = 0;
    var soObj  = this.sendOrderObj[status];
   if(!soObj){
    soObj = this.sendOrderObj[0];
    this.rounds = 0;
    //    return false;
   }
    // window.location.href = href;
    
    var gkHit:any = soObj.data.gkHit == "N"? 0: 100;
    var config = soObj.data.nextRoundsConfig.colorConfig;
    var roundsNum = soObj.data.nextRoundsConfig.roundsNum;
    this.currentRound = roundsNum;
    var guardPos = soObj.data.nextRoundsConfig.guardPos;
    var hitOdds = soObj.data.hitOdds;
    var gkOdd = soObj.data.nextRoundsConfig.gkOdd;
    var guardHit = soObj.data.guardHit;
    var gkHit:any = soObj.data.gkHit;
    hitOdds = 0.5;
    gkHit = roundsNum == 2?'Y':'N';
    guardHit= roundsNum > 2?'Y':'N';
    console.log('roundsNum => ',roundsNum);
    console.log('guardPos => ',guardPos);
    console.log('hitOdds => ',hitOdds);
    console.log('gkOdd => ',gkOdd);
    console.log('guardHit => ',guardHit);
    console.log('gkHit => ',gkHit);
    
    if (this.currentRound > 1) {
        $('.Wrap').addClass('no-pointer');
        $('.cashOut').show();
    }
    $('.current-level').html(roundsNum);

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
    let gkValue = 0.5;
    sampleCode.forEach((k)=>{
        let index = config.findIndex(l => k.color == l.color);
        if(index > -1) 
        k.value = config[index].odds;
        if(k.color == 'W'){
            gkValue = k.value;
        }
    });

        // && soObj.data.gkHit == 'Y'? true: false
        var mainArr = {
            goalKeeperVisible: !!(roundsNum > 1), // toggle visibility
            Level_status:status,
            area_goal_prop: sampleCode,
            roundsNum: roundsNum,
            hitOdds: hitOdds,
            gkOdd: gkOdd,
            guardHit: !!(guardHit == 'Y'),
            gkHit: !!(gkHit == 'Y'),
            guardPos: guardPos,
            gameReset: false,
            goalScore: 0,
            gkValue: gkValue,
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
        };
        
        if(status == 0 && this.enablePlay){
            this.oMain = new mainObj.CMain(mainArr);
            // $(this.oMain).on("but_play", (evt) => {
            //     $("#timer").show();
            //     this.startTimer(Number(this.levelData.data.globalConfig.countDown));
            // });
            $(this.oMain).on("game_exit", (evt) => {
                this.enablePlay = true;
            });
            $(this.oMain).on("odd_point", (evt, val) => {
                let odds:any = document.querySelectorAll('.show-odd-cont');
                odds.forEach((k)=>{
                    if(k.style) k.style.display = val? 'none': 'block';
                })
                $('.show-odd-cont').hide();
                this.toggleOddContent(this.currentRound);
                if(val){
                    $('.show-odds').show();

                } else{
                    $('.show-odds').hide();

                }
            });
            $(this.oMain).on("btn_exit", (evt) => {
                console.log('btn_exit');
                
            });
            $(this.oMain).on("game_ready", (evt) => {
                console.log('game ready');
                // setTimeout(()=>{

                //     this.oMain.gotoGame(mainArr, true);
                // this.oMain.goalScore =0;
                // } ,1000)
            });
            $(this.oMain).on("next_level", (evt) => {
                console.log('Next Level');
                this.resetTimer(true);
            });
            $(this.oMain).on("goal_score", (evt, val) => {
               this.setScore(val, false);
               if(this.oMain.goalScore){
                //    this.oMain.goalScore = 0;
                setTimeout(()=>{
                    this.rounds++;
                    if(this.rounds == 5) {
                        this.oMain.gameExit();
                        this.enablePlay = true;
                    } else{
                        this.callMethod(this.rounds);

                    }


                }, 2000);
               }
            //    alert(val, 'score');
          //       setTimeout(()=>{
          //           var queryParams = new URLSearchParams(window.location.search);
          //   var s:any = urlParams.get('status') || false;
          //           s = Number(s);
          //           if(s < this.sendOrderObj.length){
          //               queryParams.set("status",(++s).toString());
        
          //           } else{
          //               queryParams.set("status",'1');
        
          //           }
        
                  //   window.location.href = window.location.href.split('?')[0]+'?'+queryParams.toString();
              //   }, 2000)
                // startTimer(Number(this.levelData.data.globalConfig.countDown));
            });
        }else {
            // window.CGame()
            console.error(this.rounds, 'rounds');
            if (this.currentRound > 1) {
                $('.Wrap').addClass('no-pointer');
                $('.cashOut').show();
            }        
            // this.oMain.gotoMenu();
            this.oMain.gotoGame(mainArr);
            this.oMain.goalScore =0;
    
        }
         
        //   $(oMain).on("start_session", (evt) {
        //       if (getParamValue('ctl-arcade') === "true") {
        //           parent.__ctlArcadeStartSession();
        //       }
        //   });
      
        //   $(oMain).on("end_session", (evt) {
        //       if (getParamValue('ctl-arcade') === "true") {
        //           parent.__ctlArcadeEndSession();
        //       }
        //   });
      
        //   $(oMain).on("start_level", (evt, iLevel) {
        //       if (getParamValue('ctl-arcade') === "true") {
        //           parent.__ctlArcadeStartLevel({level: iLevel});
        //       }
        //   });
      
        //   $(oMain).on("restart_level", (evt, iLevel) {
        //       if (getParamValue('ctl-arcade') === "true") {
        //           parent.__ctlArcadeRestartLevel({level: iLevel});
        //       }
        //   });
      
        //   $(oMain).on("end_level", (evt, iLevel) {
        //       if (getParamValue('ctl-arcade') === "true") {
        //           parent.__ctlArcadeEndLevel({level: iLevel});
        //       }
        //   });
      
        //   $(oMain).on("save_score", (evt, iScore, szMode) {
        //       if (getParamValue('ctl-arcade') === "true") {
        //           parent.__ctlArcadeSaveScore({score: iScore, mode: szMode});
        //       }
        //   });
        
  }

    setInfoValue(level) {
        if (level && level.data) {
            if (level.data.globalConfig != "") {
                var quickBet = level.data.globalConfig.quickBet.split(',');
                if (quickBet.length > 0) {
                    quickBet.forEach((item, index) => {
                        $('.betvalue').append('<p class="btn-bet bet' + (index + 1) + '"">' + item + '</p>');
                    })
                }
                $(document).on('click', '.btn-bet', function (e) {
                    $('.btn-bet').removeClass('active');
                    $(e.target).addClass('active');
                })
                $('.winBet').html("maximum " + this.format(level.data.globalConfig.maxWin) + " winning amount");
                $('.gameBalance').html("IDR " + this.format(level.data.mainBalance));
                this.gameBalance = level.data.mainBalance;
                $('#stakeAmount').attr('min', 0);/* level.data.globalConfig.minBet */

                $('#stakeAmount').val(level.data.globalConfig.minBet);
                $('#stakeAmount').attr('max', level.data.globalConfig.maxBet);
            }
            $('.game-info-content').html(level.data.gameDescription);
        }
}

setScore(val, isOnload){
    if(!isOnload){
        $('.scoreValue').text(val);
        $('.showScore').show();
        setTimeout(function() {
            $('.showScore').hide();
        }, 2000);
    } else {
        localStorage.setItem('stake', '0');
        var _stake = 1;
        $('#stakeAmount').val(_stake);
        $('.winAmount').html(val);
        return false;
    }
         
    var stake = $('#stakeAmount').val();
    stake = (typeof(stake) != "number") ? ( !isNaN(stake) ? Number(stake) : 0 ) : stake;
    var previousAmt = $('.winAmount').text();
    previousAmt = (typeof(previousAmt) != "number") ? ( !isNaN(previousAmt) ? Number(previousAmt) : 0 ) : previousAmt;

    var winAmt:any = Number(previousAmt) == 0 ? (val * stake) : (val * Number(previousAmt));
    $('.winAmount').html(winAmt);
    localStorage.setItem('winAmt', winAmt.toString());
    localStorage.setItem('stake', stake);
}
  resetPopup() {
    this.popupContShow = false;
    this.cashoutShow = false;
    this.quitShow = false;
    this.fundsShow = false;
    this.timesupShow = false;
    this.earnedShow = false;
  }
}
