#! /bin/bash
# cd /Users/apadsekina/Desktop/AQA-study/autorunner/logs
currentTime=`date +"%d.%m_%H:%M"`
# logName=test_run_${currentTime}.txt
# touch ${logName}
cd /Users/apadsekina/Desktop/AQA-study
chmod u+x
chflags nouchg /Users/apadsekina/Desktop/AQA-study/autorunner
mkdir /Users/apadsekina/Desktop/AQA-study/autorunner/logs/${currentTime}

npm run test:ab &> /Users/apadsekina/Desktop/AQA-study/autorunner/logs/${currentTime}/andar_bahar_${currentTime}.txt
npm run test:ar &> /Users/apadsekina/Desktop/AQA-study/autorunner/logs/${currentTime}/roulette_${currentTime}.txt
npm run test:ct &> /Users/apadsekina/Desktop/AQA-study/autorunner/logs/${currentTime}/crazy_time_${currentTime}.txt
npm run test:dt &> /Users/apadsekina/Desktop/AQA-study/autorunner/logs/${currentTime}/dragon_tiger_${currentTime}.txt

killall Terminal

