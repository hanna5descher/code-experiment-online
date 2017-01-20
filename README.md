# code-experiment-online
HTML &amp; JavaScript codes for online behavioral experiments conducted through Amazon Mechanical Turk (MTurk).


For more detailed information on task design and experimental procedure, please read my paper, *Satisficing in split-second decision making is characterized by strategic cue discounting*, Oh et al. (2016), Journal of Experimental Psychology: Learning, Memory, and Cognition. 


The study consists of three different versions of experiments with Experiments 1 and 2 using compound cues and Experiment 3 using noncompound cues. As shown below, on each trial, participants were presented with two distinct visual stimuli with four different features (color, shape, contour, line orientation) or icons (we call these "cue dimensions"). Their task was to predict a stimulus with higher likely to "win" (positive outcome) by learning underlying probabilities associated with each cue dimension through trial-and-error (see Instructions.html under each folder). The key manipulation is time pressure to induce urgency to make choices fast. This is a convenient way of studying how people adaptively use satisficing heuristics to make fast and good-enough decisions.        

### Compound cue: Experiments 1 & 2
![alt text](https://github.com/hanna5descher/code-experiment-online/blob/master/CompoundCues/task/example_keyboard.png "compound cues")

### Noncompound cue: Experiment 3
![alt text](https://github.com/hanna5descher/code-experiment-online/blob/master/NoncompoundCues/task/instructions_keyboard.png "noncompound cues")


Scripts in each folder includes full versions of the experiments that can be ran on MTurk. Importantly, **MainTask.html** contains step-by-step procedure on how each experimental phase (including instructions, consent forms, and surveys) was presented to MTurk participants. To view sample tasks on your web browser (not through MTurk), try Practice(number).html. The full script can be ran through MTurk or MTUrk Sandbox. 
