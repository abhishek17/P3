#pragma strict
var colors : Color[];
var colorr:int=0;
private var startTime:float=0.0f;
private var speed:float=0.000005f;
function Start () {

}

function Update () {
    RenderSettings.ambientLight = Color.Lerp (RenderSettings.ambientLight, Color.white, (Time.time - startTime) * speed);
 
 	if(RenderSettings.ambientLight ==Color.white)
 	Debug.Log("Ye Ye");
    //this is just to test
    //gameO.transform.position = Vector3.Lerp(gameO.transform.position, pos.enemyStart, (Time.time - startTime) * speed);
 
}