Hooks.on("setup", () => {
	console.log("init:Hooksonsetup");
CONFIG.DND5E.spellSchools.abd = { label: "Ancient Blood", fullkey: "ancientblood", icon: "module/ValombreuseSRD5/icons/abd.web",reference: ""};
CONFIG.DND5E.spellSchools.alf = { label: "Animal Form", fullkey: "animalform", icon: "module/ValombreuseSRD5/icons/wildshape.web",reference: ""};
CONFIG.DND5E.spellSchools.swd = { label: "Shadow Domain", fullkey: "shadowdomain", icon: "module/ValombreuseSRD5/icons/swd.web",reference: ""};
});

/*Hooks.on('createActor', async function (actor, options, userID) {
  //check current user is the one that triggered the création
  //(we wouldn't want to add abilities to the actor multiple times)
  console.log("init:Hooksoncreateactor");
  if (userID != game.user.id) { return;}
  console.log(actor.system.resources.primary.label);
  actor.system.resources.primary.label="Sang Ancien";
  console.log(actor.system.resources.primary.label);
});

function DebugDisplay(app, html, data) {
	console.log("DebugDisplay>>");
	console.log(data.system.resources.primary.label);
	console.log("<<DebugDisplay");
};

Hooks.on("renderActorSheet", DebugDisplay);*/

function UpdateActorResourceName(actor, data, options, userId) {
//do my things here
//console.trace();
if (actor.system.details!=null){
	actor.system.resources.primary.label="Divination Point";
  let rp = actor.system.abilities.wis.mod*actor.system.details.level;
	actor.system.resources.primary.max=rp;
	}
};

Hooks.on('dropActorSheetData', UpdateActorResourceName);

function CardDealed(from, to, action) {
//do my things here
console.trace();
  if(action.action === "deal"){
    action.toCreate.forEach(function(c,i){
      console.log("dealCards>>deal>>");
      console.log(c[i].name);
    });
  }
};

Hooks.on("dealCards", CardDealed);

  Hooks.on("createCard", function(target) {
      //if(!!target && !!target.parent && (!!t.currentCards && (target.parent._id ? target.parent._id : target.parent.data._id) == (t.currentCards._id ? t.currentCards._id : t.currentCards.data._id))){
        //t.update();
      //}
	  const nb=Math.floor(Math.random() * 1000);
	  console.log(nb);
	  if (nb>499){
	      target.flip();
	  };
    });


//function declaration (same context) the argument are declared in the same order as the original call




