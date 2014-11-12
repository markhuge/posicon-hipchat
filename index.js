var x = this;

this.lists = {
  success: ['(fonzie)','(success)','(yougotitdude)','(awyeah)','(dance)','(ducreux)'],
  failure: ['(poo)','(areyoukiddingme)','(disapproval)','(firstworldproblems)','(grumpycat)','(facepalm)','(failed)','(gtfo)','(rageguy)','(tableflip)','(sadtroll)'],
  unknown: ['(unknown)','(doge)','(huh)','(ceilingcat)','(fry)']
};

this.getRandom = function(list) {
  var index = Math.floor(Math.random()*list.length);
  return list[index];
};

this.success = function () {return x.getRandom(x.lists.success); };
this.failure = function () {return x.getRandom(x.lists.failure); };
this.unknown = function () {return x.getRandom(x.lists.unknown); };

// sugar++
this.fail  = this.failure;
this.bad   = this.failure;
this.error = this.failure;

this.win        = this.success;
this.good       = this.success;
this.ok         = this.success;
this.successful = this.success;
