#pragma strict

private static var once=false;
private var player:GameObject;
//var pitch : Crouch;
function Start()
{
//once=false;
}
function OnTriggerEnter (other : Collider) {
	
		// Debug-draw all contact points and normals
		if(other.name=="First Person Controller")
		{
		if(!once)
		{
		once=true;
		player=GameObject.Find("Main Camera");
		//player.audio.pitch=20.8f;
		//pitch=player.GetComponent(Crouch);
		player.audio.pitch=1.3f;
		Debug.Log("play movie");
		Application.LoadLevelAdditive("Flashback");
		}
		}
		}