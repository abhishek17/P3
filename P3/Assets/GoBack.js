#pragma strict
private var timeE:int;
private var timeS:int;

private static var once=false;
private var flash:GameObject;
function Start () {
timeS=0;
timeE=100;
//once=false;
}

function Update () {
	if(timeS<timeE)
	{
	timeS++;
	}
	else
	{
	if(!once)
	{
	once=true;
	flash=GameObject.Find("Flash");
	Destroy (flash);
	//Application.LoadLevelAdditive("FirstPerson");
	}
	}

}