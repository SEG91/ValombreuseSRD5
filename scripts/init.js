Hooks.on("setup", () => {
	console.log("init:Hooksonsetup");
CONFIG.DND5E.spellSchools.AncienBlood = "Manipulation du Sang Ancien";
CONFIG.DND5E.spellSchools.PuissOurs = "Puissance de l'Ours";
CONFIG.DND5E.spellSchools.ComNat = "Communion avec la Nature";
CONFIG.DND5E.spellSchools.Ombre = "Domaine de l'Ombre";
CONFIG.DND5E.spellSchools.Corrupt = "Domaine de la Corruption";
CONFIG.DND5E.spellSchools.Meute = "Pouvoir de la Meute";
CONFIG.DND5E.spellSchools.Alpha = "Domination de l'Alpha";
CONFIG.DND5E.spellSchools.Vision = "Vision de l'Aigle";
CONFIG.DND5E.spellSchools.Air = "Maîtrise de l'Air";
CONFIG.DND5E.spellSchools.ForTau = "Force du Taureau ";
CONFIG.DND5E.spellSchools.Harmonie = "Harmonie avec la Terre";
CONFIG.DND5E.spellSchools.ASolaire = "Aura Solaire";
CONFIG.DND5E.spellSchools.Helios = "Fils d'Hélios";
CONFIG.DND5E.spellSchools.Element = "Dragon des éléments";
CONFIG.DND5E.spellSchools.Metamorphose = "Métamorphose du Dragon";
CONFIG.DND5E.spellSchools.Splendeur = "Splendeur du Lion";
CONFIG.DND5E.spellSchools.Royaume = "Protection du royaume";
CONFIG.DND5E.spellSchools.FeuPhenix = "Feu du Phénix";
CONFIG.DND5E.spellSchools.Renaissance = "Renaissance du Phénix";
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
if (actor.details!=null){
	actor.system.resources.primary.label="Sang Ancien";
	actor.system.resources.primary.max=(actor.system.abilities.int.value -1)*actor.details.level;
	}
};

Hooks.on('updateActor', UpdateActorResourceName);

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




