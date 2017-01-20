// Total 720 trials (240 x 3sets trials)
// trial sequence for probabilistic feedback with 4 icons
// randInd: 0~4 = 1st set; 5~9 = 2nd set
// randInd2: 0~4 = 3rd set
// used TrialSequence_ProbFeedback.m to create sequence
// cuesL & cuesR = index for filenames (from StimComb)
// cue weights = [0.9, 0.8, 0.7, 0.6] (see cueProb)
// sumWeights = sum(cuesL - cuesR)
// uniqProb: probability that LEFT CUE is correct based on matching sumWeights
// indProb: index for uniqProb (WARNING: index is based on MATLAB, ranging from 1 to 21; need to adjust by subtracting 1)
// randInd: index for randomized trials

var filenames = ["Stimuli/1_1111.png","Stimuli/2_1112.png","Stimuli/3_1121.png","Stimuli/4_1122.png","Stimuli/5_1211.png","Stimuli/6_1212.png","Stimuli/7_1221.png","Stimuli/8_1222.png",
"Stimuli/9_2111.png","Stimuli/10_2112.png","Stimuli/11_2121.png","Stimuli/12_2122.png","Stimuli/13_2211.png","Stimuli/14_2212.png","Stimuli/15_2221.png","Stimuli/16_2222.png"];
var cuesL = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15];
var cuesR = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,0,1,2,3,4,6,7,8,9,10,11,12,13,14,15,0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var cueProb = [[0.6,0.7,0.8,0.9],[0.6,0.7,0.9,0.8],[0.6,0.8,0.7,0.9],[0.6,0.8,0.9,0.7],[0.6,0.9,0.8,0.7],[0.6,0.9,0.7,0.8],[0.7,0.6,0.8,0.9],[0.7,0.6,0.9,0.8],[0.7,0.8,0.6,0.9],[0.7,0.8,0.9,0.6],[0.7,0.9,0.8,0.6],[0.7,0.9,0.6,0.8],[0.8,0.7,0.6,0.9],[0.8,0.7,0.9,0.6],[0.8,0.6,0.7,0.9],[0.8,0.6,0.9,0.7],[0.8,0.9,0.6,0.7],[0.8,0.9,0.7,0.6],[0.9,0.7,0.8,0.6],[0.9,0.7,0.6,0.8],[0.9,0.8,0.7,0.6],[0.9,0.8,0.6,0.7],[0.9,0.6,0.8,0.7],[0.9,0.6,0.7,0.8]];
var sumWeights = [-2,-1.8,-1.6,-1.4,-1.2,-1,-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2]; // 21 unique cases: index = 0 to 20
var uniqProb = [0.0099,0.0156,0.0245,0.0383,0.0594,0.0909,0.1368,0.2008,0.2847,0.3869,0.5000,0.6131,0.7153,0.7992,0.8632,0.9091,0.9406,0.9617,0.9755,0.9844,0.9901];

var indProb = [[15,14,18,13,17,16,20,12,16,15,19,14,18,17,21,7,10,14,9,13,12,16,8,12,11,15,10,14,13,17,8,12,15,10,14,13,17,9,13,12,16,11,15,14,18,4,8,7,6,10,9,13,5,9,8,12,7,11,10,14,9,13,12,16,15,14,18,10,14,13,17,12,16,15,19,5,9,8,12,7,10,14,6,10,9,13,8,12,11,15,6,10,9,13,8,12,15,7,11,10,14,9,13,12,16,2,6,5,9,4,8,7,3,7,6,10,5,9,8,12,10,14,13,17,12,16,15,19,15,14,18,13,17,16,20,6,10,9,13,8,12,11,15,7,10,14,9,13,12,16,7,11,10,14,9,13,12,16,8,12,15,10,14,13,17,3,7,6,10,5,9,8,12,4,8,7,6,10,9,13,8,12,11,15,10,14,13,17,9,13,12,16,15,14,18,4,8,7,11,6,10,9,13,5,9,8,12,7,10,14,5,9,8,12,7,11,10,14,6,10,9,13,8,12,15,1,5,4,8,3,7,6,10,2,6,5,9,4,8,7],
[14,15,18,13,16,17,20,12,15,16,19,14,17,18,21,8,12,15,10,13,14,17,9,12,13,16,11,14,15,18,7,10,14,9,12,13,16,8,11,12,15,10,13,14,17,4,7,8,6,9,10,13,5,8,9,12,7,10,11,14,9,12,13,16,14,15,18,10,13,14,17,12,15,16,19,6,9,10,13,8,12,15,7,10,11,14,9,12,13,16,5,8,9,12,7,10,14,6,9,10,13,8,11,12,15,2,5,6,9,4,7,8,3,6,7,10,5,8,9,12,10,13,14,17,12,15,16,19,14,15,18,13,16,17,20,7,10,11,14,9,12,13,16,8,12,15,10,13,14,17,6,9,10,13,8,11,12,15,7,10,14,9,12,13,16,3,6,7,10,5,8,9,12,4,7,8,6,9,10,13,8,11,12,15,10,13,14,17,9,12,13,16,14,15,18,5,8,9,12,7,10,11,14,6,9,10,13,8,12,15,4,7,8,11,6,9,10,13,5,8,9,12,7,10,14,1,4,5,8,3,6,7,10,2,5,6,9,4,7,8],
[15,13,17,14,18,16,20,12,16,14,18,15,19,17,21,7,9,13,10,14,12,16,8,12,10,14,11,15,13,17,9,13,15,12,16,14,18,10,14,12,16,13,17,15,19,5,9,7,8,12,10,14,6,10,8,12,9,13,11,15,8,12,10,14,15,13,17,9,13,11,15,12,16,14,18,4,8,6,10,7,9,13,5,9,7,11,8,12,10,14,6,10,8,12,9,13,15,7,11,9,13,10,14,12,16,2,6,4,8,5,9,7,3,7,5,9,6,10,8,12,10,14,12,16,13,17,15,19,15,13,17,14,18,16,20,6,10,8,12,9,13,11,15,7,9,13,10,14,12,16,8,12,10,14,11,15,13,17,9,13,15,12,16,14,18,4,8,6,10,7,11,9,13,5,9,7,8,12,10,14,7,11,9,13,10,14,12,16,8,12,10,14,15,13,17,3,7,5,9,6,10,8,12,4,8,6,10,7,9,13,5,9,7,11,8,12,10,14,6,10,8,12,9,13,15,1,5,3,7,4,8,6,10,2,6,4,8,5,9,7],
[13,15,17,14,16,18,20,12,14,16,18,15,17,19,21,9,13,15,12,14,16,18,10,12,14,16,13,15,17,19,7,9,13,10,12,14,16,8,10,12,14,11,13,15,17,5,7,9,8,10,12,14,6,8,10,12,9,11,13,15,8,10,12,14,13,15,17,9,11,13,15,12,14,16,18,6,8,10,12,9,13,15,7,9,11,13,10,12,14,16,4,6,8,10,7,9,13,5,7,9,11,8,10,12,14,2,4,6,8,5,7,9,3,5,7,9,6,8,10,12,10,12,14,16,13,15,17,19,13,15,17,14,16,18,20,8,10,12,14,11,13,15,17,9,13,15,12,14,16,18,6,8,10,12,9,11,13,15,7,9,13,10,12,14,16,4,6,8,10,7,9,11,13,5,7,9,8,10,12,14,7,9,11,13,10,12,14,16,8,10,12,14,13,15,17,5,7,9,11,8,10,12,14,6,8,10,12,9,13,15,3,5,7,9,6,8,10,12,4,6,8,10,7,9,13,1,3,5,7,4,6,8,10,2,4,6,8,5,7,9],
[13,14,16,15,17,18,20,12,14,15,17,16,18,19,21,9,12,14,13,15,16,18,10,12,13,15,14,16,17,19,8,10,13,12,14,15,17,9,11,12,14,13,15,16,18,6,8,9,10,12,13,15,7,9,10,12,11,13,14,16,7,9,10,12,13,14,16,8,10,11,13,12,14,15,17,5,7,8,10,9,12,14,6,8,9,11,10,12,13,15,4,6,7,9,8,10,13,5,7,8,10,9,11,12,14,2,4,5,7,6,8,9,3,5,6,8,7,9,10,12,10,12,13,15,14,16,17,19,13,14,16,15,17,18,20,8,10,11,13,12,14,15,17,9,12,14,13,15,16,18,7,9,10,12,11,13,14,16,8,10,13,12,14,15,17,5,7,8,10,9,11,12,14,6,8,9,10,12,13,15,6,8,9,11,10,12,13,15,7,9,10,12,13,14,16,4,6,7,9,8,10,11,13,5,7,8,10,9,12,14,3,5,6,8,7,9,10,12,4,6,7,9,8,10,13,1,3,4,6,5,7,8,10,2,4,5,7,6,8,9],
[14,13,16,15,18,17,20,12,15,14,17,16,19,18,21,8,10,13,12,15,14,17,9,12,11,14,13,16,15,18,9,12,14,13,16,15,18,10,13,12,15,14,17,16,19,6,9,8,10,13,12,15,7,10,9,12,11,14,13,16,7,10,9,12,14,13,16,8,11,10,13,12,15,14,17,4,7,6,9,8,10,13,5,8,7,10,9,12,11,14,5,8,7,10,9,12,14,6,9,8,11,10,13,12,15,2,5,4,7,6,9,8,3,6,5,8,7,10,9,12,10,13,12,15,14,17,16,19,14,13,16,15,18,17,20,7,10,9,12,11,14,13,16,8,10,13,12,15,14,17,8,11,10,13,12,15,14,17,9,12,14,13,16,15,18,5,8,7,10,9,12,11,14,6,9,8,10,13,12,15,6,9,8,11,10,13,12,15,7,10,9,12,14,13,16,3,6,5,8,7,10,9,12,4,7,6,9,8,10,13,4,7,6,9,8,11,10,13,5,8,7,10,9,12,14,1,4,3,6,5,8,7,10,2,5,4,7,6,9,8],
[15,14,18,12,16,15,19,13,17,16,20,14,18,17,21,7,10,14,8,12,11,15,9,13,12,16,10,14,13,17,8,12,15,9,13,12,16,10,14,13,17,11,15,14,18,4,8,7,5,9,8,12,6,10,9,13,7,11,10,14,10,14,13,17,15,14,18,12,16,15,19,13,17,16,20,6,10,9,13,7,10,14,8,12,11,15,9,13,12,16,7,11,10,14,8,12,15,9,13,12,16,10,14,13,17,3,7,6,10,4,8,7,5,9,8,12,6,10,9,13,9,13,12,16,10,14,13,17,15,14,18,12,16,15,19,5,9,8,12,6,10,9,13,7,10,14,8,12,11,15,6,10,9,13,7,11,10,14,8,12,15,9,13,12,16,2,6,5,9,3,7,6,10,4,8,7,5,9,8,12,8,12,11,15,9,13,12,16,10,14,13,17,15,14,18,4,8,7,11,5,9,8,12,6,10,9,13,7,10,14,5,9,8,12,6,10,9,13,7,11,10,14,8,12,15,1,5,4,8,2,6,5,9,3,7,6,10,4,8,7],
[14,15,18,12,15,16,19,13,16,17,20,14,17,18,21,8,12,15,9,12,13,16,10,13,14,17,11,14,15,18,7,10,14,8,11,12,15,9,12,13,16,10,13,14,17,4,7,8,5,8,9,12,6,9,10,13,7,10,11,14,10,13,14,17,14,15,18,12,15,16,19,13,16,17,20,7,10,11,14,8,12,15,9,12,13,16,10,13,14,17,6,9,10,13,7,10,14,8,11,12,15,9,12,13,16,3,6,7,10,4,7,8,5,8,9,12,6,9,10,13,9,12,13,16,10,13,14,17,14,15,18,12,15,16,19,6,9,10,13,7,10,11,14,8,12,15,9,12,13,16,5,8,9,12,6,9,10,13,7,10,14,8,11,12,15,2,5,6,9,3,6,7,10,4,7,8,5,8,9,12,8,11,12,15,9,12,13,16,10,13,14,17,14,15,18,5,8,9,12,6,9,10,13,7,10,11,14,8,12,15,4,7,8,11,5,8,9,12,6,9,10,13,7,10,14,1,4,5,8,2,5,6,9,3,6,7,10,4,7,8],
[15,12,16,14,18,15,19,13,17,14,18,16,20,17,21,7,8,12,10,14,11,15,9,13,10,14,12,16,13,17,10,14,15,13,17,14,18,12,16,13,17,15,19,16,20,6,10,7,9,13,10,14,8,12,9,13,11,15,12,16,8,12,9,13,15,12,16,10,14,11,15,13,17,14,18,4,8,5,9,7,8,12,6,10,7,11,9,13,10,14,7,11,8,12,10,14,15,9,13,10,14,12,16,13,17,3,7,4,8,6,10,7,5,9,6,10,8,12,9,13,9,13,10,14,12,16,13,17,15,12,16,14,18,15,19,5,9,6,10,8,12,9,13,7,8,12,10,14,11,15,8,12,9,13,11,15,12,16,10,14,15,13,17,14,18,4,8,5,9,7,11,8,12,6,10,7,9,13,10,14,6,10,7,11,9,13,10,14,8,12,9,13,15,12,16,2,6,3,7,5,9,6,10,4,8,5,9,7,8,12,5,9,6,10,8,12,9,13,7,11,8,12,10,14,15,1,5,2,6,4,8,5,9,3,7,4,8,6,10,7],
[12,15,16,14,15,18,19,13,14,17,18,16,17,20,21,10,14,15,13,14,17,18,12,13,16,17,15,16,19,20,7,8,12,10,11,14,15,9,10,13,14,12,13,16,17,6,7,10,9,10,13,14,8,9,12,13,11,12,15,16,8,9,12,13,12,15,16,10,11,14,15,13,14,17,18,7,8,11,12,10,14,15,9,10,13,14,12,13,16,17,4,5,8,9,7,8,12,6,7,10,11,9,10,13,14,3,4,7,8,6,7,10,5,6,9,10,8,9,12,13,9,10,13,14,12,13,16,17,12,15,16,14,15,18,19,8,9,12,13,11,12,15,16,10,14,15,13,14,17,18,5,6,9,10,8,9,12,13,7,8,12,10,11,14,15,4,5,8,9,7,8,11,12,6,7,10,9,10,13,14,6,7,10,11,9,10,13,14,8,9,12,13,12,15,16,5,6,9,10,8,9,12,13,7,8,11,12,10,14,15,2,3,6,7,5,6,9,10,4,5,8,9,7,8,12,1,2,5,6,4,5,8,9,3,4,7,8,6,7,10],
[12,14,15,15,16,18,19,13,14,16,17,17,18,20,21,10,13,14,14,15,17,18,12,13,15,16,16,17,19,20,8,9,12,12,13,15,16,10,11,13,14,14,15,17,18,7,8,10,11,12,14,15,9,10,12,13,13,14,16,17,7,8,10,11,12,14,15,9,10,12,13,13,14,16,17,6,7,9,10,10,13,14,8,9,11,12,12,13,15,16,4,5,7,8,8,9,12,6,7,9,10,10,11,13,14,3,4,6,7,7,8,10,5,6,8,9,9,10,12,13,9,10,12,13,13,14,16,17,12,14,15,15,16,18,19,8,9,11,12,12,13,15,16,10,13,14,14,15,17,18,6,7,9,10,10,11,13,14,8,9,12,12,13,15,16,5,6,8,9,9,10,12,13,7,8,10,11,12,14,15,5,6,8,9,9,10,12,13,7,8,10,11,12,14,15,4,5,7,8,8,9,11,12,6,7,9,10,10,13,14,2,3,5,6,6,7,9,10,4,5,7,8,8,9,12,1,2,4,5,5,6,8,9,3,4,6,7,7,8,10],
[14,12,15,15,18,16,19,13,16,14,17,17,20,18,21,8,9,12,12,15,13,16,10,13,11,14,14,17,15,18,10,13,14,14,17,15,18,12,15,13,16,16,19,17,20,7,10,8,11,14,12,15,9,12,10,13,13,16,14,17,7,10,8,11,14,12,15,9,12,10,13,13,16,14,17,4,7,5,8,8,9,12,6,9,7,10,10,13,11,14,6,9,7,10,10,13,14,8,11,9,12,12,15,13,16,3,6,4,7,7,10,8,5,8,6,9,9,12,10,13,9,12,10,13,13,16,14,17,14,12,15,15,18,16,19,6,9,7,10,10,13,11,14,8,9,12,12,15,13,16,8,11,9,12,12,15,13,16,10,13,14,14,17,15,18,5,8,6,9,9,12,10,13,7,10,8,11,14,12,15,5,8,6,9,9,12,10,13,7,10,8,11,14,12,15,2,5,3,6,6,9,7,10,4,7,5,8,8,9,12,4,7,5,8,8,11,9,12,6,9,7,10,10,13,14,1,4,2,5,5,8,6,9,3,6,4,7,7,10,8],
[15,12,16,13,17,14,18,14,18,15,19,16,20,17,21,7,8,12,9,13,10,14,10,14,11,15,12,16,13,17,10,14,15,12,16,13,17,13,17,14,18,15,19,16,20,6,10,7,8,12,9,13,9,13,10,14,11,15,12,16,9,13,10,14,15,12,16,12,16,13,17,14,18,15,19,5,9,6,10,7,8,12,8,12,9,13,10,14,11,15,8,12,9,13,10,14,15,11,15,12,16,13,17,14,18,4,8,5,9,6,10,7,7,11,8,12,9,13,10,14,8,12,9,13,10,14,11,15,15,12,16,13,17,14,18,4,8,5,9,6,10,7,11,7,8,12,9,13,10,14,7,11,8,12,9,13,10,14,10,14,15,12,16,13,17,3,7,4,8,5,9,6,10,6,10,7,8,12,9,13,6,10,7,11,8,12,9,13,9,13,10,14,15,12,16,2,6,3,7,4,8,5,9,5,9,6,10,7,8,12,5,9,6,10,7,11,8,12,8,12,9,13,10,14,15,1,5,2,6,3,7,4,8,4,8,5,9,6,10,7],
[12,15,16,13,14,17,18,14,15,18,19,16,17,20,21,10,14,15,12,13,16,17,13,14,17,18,15,16,19,20,7,8,12,9,10,13,14,10,11,14,15,12,13,16,17,6,7,10,8,9,12,13,9,10,13,14,11,12,15,16,9,10,13,14,12,15,16,12,13,16,17,14,15,18,19,8,9,12,13,10,14,15,11,12,15,16,13,14,17,18,5,6,9,10,7,8,12,8,9,12,13,10,11,14,15,4,5,8,9,6,7,10,7,8,11,12,9,10,13,14,8,9,12,13,10,11,14,15,12,15,16,13,14,17,18,7,8,11,12,9,10,13,14,10,14,15,12,13,16,17,4,5,8,9,6,7,10,11,7,8,12,9,10,13,14,3,4,7,8,5,6,9,10,6,7,10,8,9,12,13,6,7,10,11,8,9,12,13,9,10,13,14,12,15,16,5,6,9,10,7,8,11,12,8,9,12,13,10,14,15,2,3,6,7,4,5,8,9,5,6,9,10,7,8,12,1,2,5,6,3,4,7,8,4,5,8,9,6,7,10],
[15,13,17,12,16,14,18,14,18,16,20,15,19,17,21,7,9,13,8,12,10,14,10,14,12,16,11,15,13,17,9,13,15,10,14,12,16,12,16,14,18,13,17,15,19,5,9,7,6,10,8,12,8,12,10,14,9,13,11,15,10,14,12,16,15,13,17,13,17,15,19,14,18,16,20,6,10,8,12,7,9,13,9,13,11,15,10,14,12,16,8,12,10,14,9,13,15,11,15,13,17,12,16,14,18,4,8,6,10,5,9,7,7,11,9,13,8,12,10,14,8,12,10,14,9,13,11,15,15,13,17,12,16,14,18,4,8,6,10,5,9,7,11,7,9,13,8,12,10,14,6,10,8,12,7,11,9,13,9,13,15,10,14,12,16,2,6,4,8,3,7,5,9,5,9,7,6,10,8,12,7,11,9,13,8,12,10,14,10,14,12,16,15,13,17,3,7,5,9,4,8,6,10,6,10,8,12,7,9,13,5,9,7,11,6,10,8,12,8,12,10,14,9,13,15,1,5,3,7,2,6,4,8,4,8,6,10,5,9,7],
[13,15,17,12,14,16,18,14,16,18,20,15,17,19,21,9,13,15,10,12,14,16,12,14,16,18,13,15,17,19,7,9,13,8,10,12,14,10,12,14,16,11,13,15,17,5,7,9,6,8,10,12,8,10,12,14,9,11,13,15,10,12,14,16,13,15,17,13,15,17,19,14,16,18,20,8,10,12,14,9,13,15,11,13,15,17,12,14,16,18,6,8,10,12,7,9,13,9,11,13,15,10,12,14,16,4,6,8,10,5,7,9,7,9,11,13,8,10,12,14,8,10,12,14,9,11,13,15,13,15,17,12,14,16,18,6,8,10,12,7,9,11,13,9,13,15,10,12,14,16,4,6,8,10,5,7,9,11,7,9,13,8,10,12,14,2,4,6,8,3,5,7,9,5,7,9,6,8,10,12,7,9,11,13,8,10,12,14,10,12,14,16,13,15,17,5,7,9,11,6,8,10,12,8,10,12,14,9,13,15,3,5,7,9,4,6,8,10,6,8,10,12,7,9,13,1,3,5,7,2,4,6,8,4,6,8,10,5,7,9],
[13,12,14,15,17,16,18,14,16,15,17,18,20,19,21,9,10,12,13,15,14,16,12,14,13,15,16,18,17,19,10,12,13,14,16,15,17,13,15,14,16,17,19,18,20,8,10,9,12,14,13,15,11,13,12,14,15,17,16,18,7,9,8,10,13,12,14,10,12,11,13,14,16,15,17,5,7,6,8,9,10,12,8,10,9,11,12,14,13,15,6,8,7,9,10,12,13,9,11,10,12,13,15,14,16,4,6,5,7,8,10,9,7,9,8,10,11,13,12,14,8,10,9,11,12,14,13,15,13,12,14,15,17,16,18,6,8,7,9,10,12,11,13,9,10,12,13,15,14,16,7,9,8,10,11,13,12,14,10,12,13,14,16,15,17,5,7,6,8,9,11,10,12,8,10,9,12,14,13,15,4,6,5,7,8,10,9,11,7,9,8,10,13,12,14,2,4,3,5,6,8,7,9,5,7,6,8,9,10,12,3,5,4,6,7,9,8,10,6,8,7,9,10,12,13,1,3,2,4,5,7,6,8,4,6,5,7,8,10,9],
[12,13,14,15,16,17,18,14,15,16,17,18,19,20,21,10,12,13,14,15,16,17,13,14,15,16,17,18,19,20,9,10,12,13,14,15,16,12,13,14,15,16,17,18,19,8,9,10,12,13,14,15,11,12,13,14,15,16,17,18,7,8,9,10,12,13,14,10,11,12,13,14,15,16,17,6,7,8,9,10,12,13,9,10,11,12,13,14,15,16,5,6,7,8,9,10,12,8,9,10,11,12,13,14,15,4,5,6,7,8,9,10,7,8,9,10,11,12,13,14,8,9,10,11,12,13,14,15,12,13,14,15,16,17,18,7,8,9,10,11,12,13,14,10,12,13,14,15,16,17,6,7,8,9,10,11,12,13,9,10,12,13,14,15,16,5,6,7,8,9,10,11,12,8,9,10,12,13,14,15,4,5,6,7,8,9,10,11,7,8,9,10,12,13,14,3,4,5,6,7,8,9,10,6,7,8,9,10,12,13,2,3,4,5,6,7,8,9,5,6,7,8,9,10,12,1,2,3,4,5,6,7,8,4,5,6,7,8,9,10],
[12,14,15,13,14,16,17,15,16,18,19,17,18,20,21,10,13,14,12,13,15,16,14,15,17,18,16,17,19,20,8,9,12,10,11,13,14,12,13,15,16,14,15,17,18,7,8,10,9,10,12,13,11,12,14,15,13,14,16,17,9,10,12,13,12,14,15,13,14,16,17,15,16,18,19,8,9,11,12,10,13,14,12,13,15,16,14,15,17,18,6,7,9,10,8,9,12,10,11,13,14,12,13,15,16,5,6,8,9,7,8,10,9,10,12,13,11,12,14,15,7,8,10,11,9,10,12,13,12,14,15,13,14,16,17,6,7,9,10,8,9,11,12,10,13,14,12,13,15,16,4,5,7,8,6,7,9,10,8,9,12,10,11,13,14,3,4,6,7,5,6,8,9,7,8,10,9,10,12,13,5,6,8,9,7,8,10,11,9,10,12,13,12,14,15,4,5,7,8,6,7,9,10,8,9,11,12,10,13,14,2,3,5,6,4,5,7,8,6,7,9,10,8,9,12,1,2,4,5,3,4,6,7,5,6,8,9,7,8,10],
[14,12,15,13,16,14,17,15,18,16,19,17,20,18,21,8,9,12,10,13,11,14,12,15,13,16,14,17,15,18,10,13,14,12,15,13,16,14,17,15,18,16,19,17,20,7,10,8,9,12,10,13,11,14,12,15,13,16,14,17,9,12,10,13,14,12,15,13,16,14,17,15,18,16,19,6,9,7,10,8,9,12,10,13,11,14,12,15,13,16,8,11,9,12,10,13,14,12,15,13,16,14,17,15,18,5,8,6,9,7,10,8,9,12,10,13,11,14,12,15,7,10,8,11,9,12,10,13,14,12,15,13,16,14,17,4,7,5,8,6,9,7,10,8,9,12,10,13,11,14,6,9,7,10,8,11,9,12,10,13,14,12,15,13,16,3,6,4,7,5,8,6,9,7,10,8,9,12,10,13,5,8,6,9,7,10,8,11,9,12,10,13,14,12,15,2,5,3,6,4,7,5,8,6,9,7,10,8,9,12,4,7,5,8,6,9,7,10,8,11,9,12,10,13,14,1,4,2,5,3,6,4,7,5,8,6,9,7,10,8],
[12,13,14,14,15,16,17,15,16,17,18,18,19,20,21,10,12,13,13,14,15,16,14,15,16,17,17,18,19,20,9,10,12,12,13,14,15,13,14,15,16,16,17,18,19,8,9,10,11,12,13,14,12,13,14,15,15,16,17,18,8,9,10,11,12,13,14,12,13,14,15,15,16,17,18,7,8,9,10,10,12,13,11,12,13,14,14,15,16,17,6,7,8,9,9,10,12,10,11,12,13,13,14,15,16,5,6,7,8,8,9,10,9,10,11,12,12,13,14,15,7,8,9,10,10,11,12,13,12,13,14,14,15,16,17,6,7,8,9,9,10,11,12,10,12,13,13,14,15,16,5,6,7,8,8,9,10,11,9,10,12,12,13,14,15,4,5,6,7,7,8,9,10,8,9,10,11,12,13,14,4,5,6,7,7,8,9,10,8,9,10,11,12,13,14,3,4,5,6,6,7,8,9,7,8,9,10,10,12,13,2,3,4,5,5,6,7,8,6,7,8,9,9,10,12,1,2,3,4,4,5,6,7,5,6,7,8,8,9,10],
[13,12,14,14,16,15,17,15,17,16,18,18,20,19,21,9,10,12,12,14,13,15,13,15,14,16,16,18,17,19,10,12,13,13,15,14,16,14,16,15,17,17,19,18,20,8,10,9,11,13,12,14,12,14,13,15,15,17,16,18,8,10,9,11,13,12,14,12,14,13,15,15,17,16,18,6,8,7,9,9,10,12,10,12,11,13,13,15,14,16,7,9,8,10,10,12,13,11,13,12,14,14,16,15,17,5,7,6,8,8,10,9,9,11,10,12,12,14,13,15,7,9,8,10,10,12,11,13,13,12,14,14,16,15,17,5,7,6,8,8,10,9,11,9,10,12,12,14,13,15,6,8,7,9,9,11,10,12,10,12,13,13,15,14,16,4,6,5,7,7,9,8,10,8,10,9,11,13,12,14,4,6,5,7,7,9,8,10,8,10,9,11,13,12,14,2,4,3,5,5,7,6,8,6,8,7,9,9,10,12,3,5,4,6,6,8,7,9,7,9,8,10,10,12,13,1,3,2,4,4,6,5,7,5,7,6,8,8,10,9],
[13,14,16,12,14,15,17,15,17,18,20,16,18,19,21,9,12,14,10,12,13,15,13,15,16,18,14,16,17,19,8,10,13,9,11,12,14,12,14,15,17,13,15,16,18,6,8,9,7,9,10,12,10,12,13,15,11,13,14,16,10,12,13,15,13,14,16,14,16,17,19,15,17,18,20,8,10,11,13,9,12,14,12,14,15,17,13,15,16,18,7,9,10,12,8,10,13,11,13,14,16,12,14,15,17,5,7,8,10,6,8,9,9,11,12,14,10,12,13,15,7,9,10,12,8,10,11,13,13,14,16,12,14,15,17,5,7,8,10,6,8,9,11,9,12,14,10,12,13,15,4,6,7,9,5,7,8,10,8,10,13,9,11,12,14,2,4,5,7,3,5,6,8,6,8,9,7,9,10,12,6,8,9,11,7,9,10,12,10,12,13,15,13,14,16,4,6,7,9,5,7,8,10,8,10,11,13,9,12,14,3,5,6,8,4,6,7,9,7,9,10,12,8,10,13,1,3,4,6,2,4,5,7,5,7,8,10,6,8,9],
[14,13,16,12,15,14,17,15,18,17,20,16,19,18,21,8,10,13,9,12,11,14,12,15,14,17,13,16,15,18,9,12,14,10,13,12,15,13,16,15,18,14,17,16,19,6,9,8,7,10,9,12,10,13,12,15,11,14,13,16,10,13,12,15,14,13,16,14,17,16,19,15,18,17,20,7,10,9,12,8,10,13,11,14,13,16,12,15,14,17,8,11,10,13,9,12,14,12,15,14,17,13,16,15,18,5,8,7,10,6,9,8,9,12,11,14,10,13,12,15,7,10,9,12,8,11,10,13,14,13,16,12,15,14,17,4,7,6,9,5,8,7,10,8,10,13,9,12,11,14,5,8,7,10,6,9,8,11,9,12,14,10,13,12,15,2,5,4,7,3,6,5,8,6,9,8,7,10,9,12,6,9,8,11,7,10,9,12,10,13,12,15,14,13,16,3,6,5,8,4,7,6,9,7,10,9,12,8,10,13,4,7,6,9,5,8,7,10,8,11,10,13,9,12,14,1,4,3,6,2,5,4,7,5,8,7,10,6,9,8]];

var randInd = [[[206,39,20,174,60,64,109,219,183,8,180,40,146,32,71,225,100,164,51,118,188,88,215,54,143,113,179,114,34,176,235,126,21,58,186,129,87,86,59,24,4,102,110,223,132,161,93,12,192,197,184,140,63,195,211,48,15,221,185,42],[99,151,52,119,50,27,150,163,212,79,198,37,85,239,5,189,16,108,104,18,111,92,10,157,230,158,187,45,53,127,80,130,166,142,49,13,128,78,61,97,17,74,229,31,171,160,201,106,38,96,43,56,168,120,169,123,9,177,57,122],[133,76,227,7,19,217,33,194,62,94,68,95,66,240,226,125,193,210,236,98,3,191,44,190,213,196,67,139,220,134,222,26,228,204,167,200,81,144,46,35,84,207,105,232,91,117,135,83,145,224,124,36,70,237,162,115,152,6,136,90],[47,153,141,214,25,181,231,203,121,205,155,149,101,218,69,173,138,103,2,147,154,170,22,156,75,55,107,23,11,208,112,41,77,178,209,165,116,199,14,82,137,131,1,28,175,73,172,72,202,234,89,238,159,29,65,182,216,233,30,148]],
[[74,51,28,180,127,33,97,81,66,240,211,115,102,204,95,136,237,75,94,216,158,167,78,168,165,189,138,5,161,227,177,110,190,201,40,29,98,22,125,174,231,93,7,152,213,18,103,85,133,212,153,130,121,150,217,113,203,84,179,15],[62,23,124,149,233,192,1,108,145,109,34,91,144,80,169,207,117,12,116,68,195,175,140,210,49,45,6,159,134,52,59,105,38,215,178,235,181,173,218,193,36,54,77,162,194,156,21,183,238,220,87,230,107,223,47,166,111,182,123,16],[72,14,99,236,9,148,112,100,43,221,239,214,60,89,119,146,198,184,202,143,196,27,46,4,58,185,64,142,70,88,234,222,120,32,187,19,8,164,82,170,219,96,114,37,126,67,208,73,44,83,48,65,155,56,186,151,104,154,225,24],[191,129,171,53,176,69,86,160,228,57,25,61,26,106,71,197,139,11,35,2,39,92,188,17,101,199,157,13,31,229,128,232,131,30,224,226,3,163,41,132,63,209,42,118,79,200,10,90,122,141,172,206,137,205,50,76,135,20,147,55]],
[[210,2,89,73,149,65,160,232,162,1,135,121,139,218,237,97,59,117,155,193,35,179,76,235,137,55,199,92,29,145,125,120,39,191,87,156,209,167,188,165,115,74,196,32,207,75,14,101,194,166,127,68,8,81,132,94,36,26,184,104],[64,175,189,31,201,60,5,46,212,143,42,22,12,69,202,106,53,154,41,47,223,45,57,231,224,186,95,88,228,34,17,164,238,10,99,20,185,7,197,33,181,203,225,80,157,118,215,173,21,128,58,83,176,239,85,163,112,151,78,174],[43,98,213,150,227,61,56,3,16,233,86,198,170,216,140,13,82,236,100,6,113,153,67,230,148,109,158,70,30,11,211,84,18,222,28,226,19,102,72,15,159,217,114,49,192,93,161,4,91,9,111,220,63,105,122,205,77,126,27,169],[129,178,134,172,229,38,71,144,171,195,54,168,52,204,180,103,51,208,79,240,138,130,152,219,206,50,200,177,62,25,133,107,190,214,182,119,40,90,142,66,108,96,187,24,147,234,37,221,23,124,123,48,116,141,44,131,136,110,183,146]],
[[30,73,40,53,104,131,117,84,153,28,218,99,180,1,149,158,118,123,46,187,24,12,65,172,19,199,240,92,135,209,81,196,233,175,7,49,127,206,138,174,36,189,43,215,192,42,157,134,79,34,100,183,128,6,227,80,75,224,176,151],[52,216,97,14,94,116,200,112,82,235,204,63,232,95,55,66,111,47,96,45,160,213,74,185,3,136,64,113,146,51,211,110,139,39,155,9,140,29,221,83,59,91,17,182,57,31,186,132,147,106,222,142,119,164,184,38,220,21,102,35],[18,148,126,33,48,226,90,156,195,238,87,62,214,236,130,61,150,11,25,178,143,109,86,41,167,207,169,89,223,152,27,67,190,137,5,145,193,229,98,188,122,205,237,16,162,2,219,115,177,194,166,159,141,71,234,179,58,201,114,26],[165,76,120,4,144,85,22,208,60,121,69,15,50,239,108,32,231,173,77,101,133,105,171,103,44,93,230,70,154,37,181,197,228,202,78,170,56,225,68,124,191,210,161,217,72,88,168,129,10,54,163,212,107,8,23,203,20,13,198,125]],
[[177,204,51,158,75,206,133,155,226,190,127,140,210,168,219,163,105,208,27,180,100,86,108,179,118,131,199,170,18,142,194,173,147,203,31,220,229,150,93,134,103,57,189,60,81,213,68,184,211,175,70,137,192,145,15,161,98,39,230,25],[5,236,79,4,36,212,188,17,54,22,228,218,23,65,149,215,138,124,74,135,2,185,195,104,151,58,1,30,88,112,224,111,166,24,214,38,148,19,47,9,202,94,122,78,223,153,167,130,101,205,41,95,207,110,92,49,132,222,80,187],[136,55,44,176,91,128,232,115,141,181,227,11,162,62,225,16,109,231,6,197,90,159,48,146,119,160,87,235,106,71,102,53,182,121,198,233,164,72,14,196,172,3,69,29,169,85,96,237,13,183,10,144,33,240,43,99,152,113,34,238],[217,154,84,12,234,97,8,143,45,193,56,77,21,73,35,64,116,26,209,37,32,67,200,28,125,59,76,40,165,126,157,221,139,201,82,129,156,191,123,186,89,61,216,83,50,171,120,42,174,66,20,114,46,178,117,63,107,239,7,52]],
[[210,48,224,102,159,95,214,97,165,117,84,177,135,79,5,132,80,182,129,37,111,150,110,228,161,149,231,50,221,142,164,85,13,72,198,94,158,134,193,138,176,202,104,225,21,46,18,235,27,40,7,19,184,170,187,209,173,69,217,62],[183,223,155,204,55,185,116,143,232,160,20,29,12,82,148,171,118,180,64,175,16,222,2,3,179,137,71,98,167,101,76,30,197,58,131,100,108,190,65,103,49,126,57,236,41,147,234,42,233,105,140,39,191,22,88,216,92,83,70,107],[8,156,144,125,93,89,128,74,25,113,186,75,124,56,127,47,207,6,227,81,11,68,14,166,195,78,212,9,121,141,151,109,178,115,60,63,188,145,17,112,59,213,114,199,162,73,174,218,34,122,15,168,90,61,33,226,172,23,35,54],[32,99,1,10,157,43,36,154,181,38,123,45,230,51,91,86,189,206,146,196,192,215,139,208,52,237,152,96,200,133,153,169,87,229,211,4,28,136,220,26,67,77,194,120,130,31,240,219,106,201,24,53,163,66,119,203,238,239,205,44]],
[[142,131,112,82,119,30,10,128,217,16,96,133,15,14,204,91,237,63,189,24,46,134,139,107,59,232,216,185,210,27,8,118,228,224,240,124,49,186,136,239,5,213,4,184,209,36,190,155,195,9,149,68,50,144,28,202,171,115,86,223],[158,43,13,105,106,198,180,214,175,95,44,79,29,7,98,177,6,200,141,72,74,75,207,183,156,92,127,205,122,235,80,179,110,137,93,25,101,23,90,148,102,65,18,70,39,146,163,194,21,113,20,150,85,222,34,109,42,114,130,176],[71,94,1,37,48,66,221,58,196,60,231,199,151,116,167,236,38,11,178,147,56,104,81,53,100,121,73,159,191,187,154,208,215,233,125,35,51,83,19,218,54,212,78,173,57,67,26,227,129,143,55,145,120,197,84,174,61,172,193,77],[157,22,45,88,99,135,219,108,160,123,41,138,126,192,32,111,188,170,117,220,52,89,230,165,229,162,203,140,152,17,31,87,211,169,69,132,47,97,166,2,238,76,153,234,182,225,164,226,33,168,206,62,161,3,181,40,12,103,201,64]],
[[169,195,102,26,141,120,89,135,46,124,35,173,58,201,38,146,85,8,165,125,5,203,214,25,222,16,13,204,175,83,185,236,96,238,164,60,72,224,3,217,110,168,161,27,18,149,194,42,9,20,136,200,142,40,188,73,174,181,156,153],[216,24,95,207,225,79,144,220,104,28,62,30,140,65,108,82,134,183,126,88,191,218,117,111,190,44,226,1,215,145,92,23,57,209,162,45,101,239,69,187,177,235,19,32,86,157,123,112,105,231,131,6,103,186,81,4,37,206,67,80],[52,213,172,22,93,158,78,91,221,17,107,94,119,121,56,198,106,11,70,99,109,133,180,127,77,139,237,74,228,155,227,21,59,232,205,150,68,51,171,240,219,159,197,118,129,48,160,14,53,179,234,202,55,113,147,76,116,97,84,170],[211,64,41,196,143,151,137,75,138,230,128,152,34,2,192,167,90,233,210,12,166,33,130,87,15,189,10,36,71,31,178,199,122,176,43,47,212,154,182,66,29,61,114,100,184,7,132,163,115,49,54,63,223,229,148,98,50,39,208,193]],
[[61,20,134,222,25,128,184,127,159,137,7,42,175,54,161,74,101,114,89,87,51,229,216,187,76,3,17,144,69,29,90,206,19,212,154,237,160,57,138,60,122,44,189,34,198,181,79,71,178,1,135,172,100,26,196,140,43,81,72,148],[190,85,224,30,63,18,218,36,203,228,193,22,179,39,153,80,225,152,82,126,220,103,50,123,9,142,208,41,86,48,31,191,12,204,6,240,107,49,174,102,16,146,66,209,13,65,52,15,147,195,157,64,59,105,124,200,167,156,2,77],[132,67,110,231,205,115,188,109,84,238,35,95,234,180,11,171,99,166,10,182,53,125,119,197,113,106,8,33,149,68,163,55,38,226,130,75,183,62,143,150,92,118,215,97,210,5,158,32,164,185,230,46,223,73,24,136,104,214,129,213],[47,169,83,78,58,116,217,194,199,233,211,176,151,170,207,40,91,232,177,14,221,112,37,4,141,173,21,162,111,131,93,121,94,23,133,45,201,227,27,186,219,239,155,98,202,96,117,145,88,56,28,108,70,235,139,192,236,120,168,165]],
[[150,153,169,5,198,158,206,214,27,1,58,135,203,55,192,179,200,183,146,99,50,190,42,101,231,218,143,168,96,67,228,236,199,165,32,234,130,240,85,180,10,22,161,91,188,224,226,217,81,23,54,209,88,149,171,46,221,170,122,121],[104,83,52,105,2,118,78,174,6,62,44,7,108,69,40,102,36,215,74,3,68,207,100,126,94,90,155,97,151,144,45,66,48,77,24,63,132,175,107,219,106,185,235,147,212,28,70,51,137,72,176,141,237,127,4,33,186,197,12,167],[93,166,152,119,163,31,73,26,65,220,34,139,216,15,202,145,56,112,61,138,89,172,194,117,239,86,120,123,95,25,87,13,84,111,213,133,114,134,195,148,30,37,177,98,41,80,18,57,196,154,35,113,75,232,64,11,225,181,222,8],[38,109,159,233,210,47,204,187,92,29,125,43,71,59,182,9,156,164,131,49,21,140,178,160,19,208,184,227,16,53,223,157,129,17,136,128,201,142,110,79,115,238,103,229,116,173,82,124,193,230,39,76,20,189,205,14,191,211,162,60]]];

var randInd2 = [[[140,101,150,192,55,78,71,83,18,156,139,209,155,180,164,188,105,206,159,102,43,72,103,224,57,21,120,178,79,123,170,199,2,225,148,69,238,135,232,162,219,110,94,12,65,179,136,38,163,19,67,152,87,161,14,196,90,175,113,95],[10,36,191,45,88,33,193,197,213,210,52,174,143,122,200,138,5,53,216,190,28,61,51,54,1,195,50,68,222,85,7,129,31,89,126,62,142,11,151,97,3,115,198,189,73,141,39,48,98,59,80,128,34,133,145,47,132,118,17,37],[134,15,185,208,44,177,60,13,64,217,66,42,93,107,40,234,169,226,218,56,236,29,99,121,92,173,106,228,58,112,104,144,194,215,158,30,240,125,149,203,8,81,22,220,32,168,214,184,25,167,157,108,84,109,63,114,131,212,16,153],[76,230,41,229,147,26,181,201,211,183,239,35,176,82,204,49,70,91,205,86,127,46,154,9,100,77,23,165,182,160,116,137,4,27,207,186,171,119,20,146,130,233,117,124,172,221,6,96,237,74,111,202,231,223,227,235,24,166,187,75]],
[[215,179,145,117,188,130,76,2,75,55,239,60,1,181,213,177,141,209,139,234,95,59,42,68,22,113,116,89,16,160,171,190,37,88,18,227,46,146,79,186,163,109,226,180,14,200,144,86,135,78,156,62,147,28,50,39,122,9,85,183],[166,194,137,168,158,92,65,33,119,6,100,83,17,27,107,142,25,10,173,96,191,204,61,32,159,192,20,136,157,236,120,220,172,199,224,84,19,178,140,203,40,185,115,229,70,106,149,218,201,64,111,81,205,214,47,101,164,138,153,123],[114,24,165,128,225,48,211,152,148,41,132,15,174,198,80,121,11,228,45,162,71,212,118,207,231,53,182,219,134,170,66,193,230,8,91,58,196,232,151,184,74,125,208,54,169,103,217,49,221,13,233,36,110,240,93,30,131,167,112,105],[133,26,77,44,3,87,21,216,56,155,31,210,38,206,29,69,126,102,129,67,237,51,90,154,82,238,197,4,175,127,223,104,94,34,235,63,195,98,124,43,222,150,57,189,161,35,176,73,99,202,52,12,23,7,108,143,187,97,72,5]],
[[125,42,195,141,235,71,4,43,92,46,102,140,199,238,205,36,62,8,33,178,133,142,68,137,208,211,63,118,11,187,165,98,34,225,149,177,50,198,172,41,170,220,15,126,10,167,106,159,184,91,55,139,181,113,21,67,163,112,107,94],[80,232,14,90,227,88,174,44,12,89,147,168,201,116,209,219,22,61,13,53,138,231,64,212,75,134,210,110,25,144,176,87,129,45,164,233,73,37,70,230,166,193,146,60,157,203,16,158,194,82,183,122,79,161,31,202,54,131,150,108],[145,105,52,76,213,49,191,132,35,3,196,27,216,95,104,65,28,229,47,51,85,18,192,1,114,182,69,162,214,234,24,9,121,223,153,143,228,83,204,56,115,93,59,156,160,20,207,169,123,66,224,5,179,200,23,117,128,86,186,97],[58,17,84,151,239,109,103,240,2,81,221,175,72,189,136,74,96,39,78,217,135,190,124,188,130,197,30,226,215,127,111,206,120,152,38,236,154,119,99,222,173,29,180,32,101,155,40,148,48,185,237,100,57,6,19,171,218,26,77,7]],
[[221,208,28,112,239,223,41,113,172,154,11,218,182,71,166,219,194,168,200,21,119,198,27,193,204,87,129,156,18,49,108,67,235,82,171,33,116,155,162,9,127,226,152,170,128,213,143,35,104,224,60,238,99,225,158,148,1,51,196,139],[132,61,237,163,199,29,195,47,5,123,164,17,83,209,131,48,169,231,201,117,206,65,181,110,175,121,107,64,240,161,75,76,179,6,125,12,228,16,8,44,66,234,96,136,115,101,210,34,177,73,90,187,78,69,45,70,149,135,118,217],[183,134,141,100,54,22,80,207,62,14,55,142,109,97,167,153,95,227,43,25,192,233,157,89,57,10,212,52,140,165,4,216,92,138,215,23,137,68,230,133,46,94,15,159,144,151,105,39,36,114,184,59,186,42,222,211,102,174,56,2],[229,26,176,214,37,232,91,189,13,130,72,147,40,190,31,202,32,180,63,160,126,103,84,191,38,50,146,88,205,124,173,20,145,74,203,185,24,19,3,188,178,93,120,79,106,58,77,236,150,220,53,85,122,7,197,30,98,86,111,81]],
[[172,136,233,150,60,106,167,76,234,194,101,170,226,158,177,56,160,47,128,18,52,103,212,57,237,145,86,235,70,23,81,218,189,155,16,214,8,135,17,206,230,102,120,41,134,227,202,46,215,166,223,239,216,32,192,154,36,24,144,117],[95,3,84,37,195,129,119,115,200,187,28,30,139,178,229,217,35,109,62,79,151,7,196,9,42,198,6,163,77,59,98,21,10,228,169,224,85,111,13,20,183,162,66,131,174,40,146,12,105,64,152,93,68,92,176,181,53,209,25,26],[122,203,221,91,45,1,78,43,112,219,110,99,113,50,190,49,186,67,104,138,55,15,175,71,63,184,89,132,182,168,193,179,188,165,33,80,75,140,153,148,90,222,22,185,2,44,97,232,121,54,116,204,191,65,149,118,82,201,236,141],[157,31,19,205,5,39,100,240,171,4,161,58,69,127,27,83,34,29,137,164,73,142,156,180,197,114,173,147,74,130,213,225,199,38,126,207,133,11,88,94,123,87,220,72,51,238,159,61,48,14,124,108,231,125,96,107,208,143,211,210]]];