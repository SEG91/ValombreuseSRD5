
Hooks.on('createActor', async function (actor, options, userID) {
  //check current user is the one that triggered the création
  //(we wouldn't want to add abilities to the actor multiple times)
  console.trace();
  if (userID != game.user.id) { return;}
  console.trace();
  actor.system.resources[0].label = "Sang Ancien";
}