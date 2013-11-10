#pragma strict

private var enemy:GameObject;
private var enemyT:Transform;
private var tr: Transform;
private var meshcollide:GameObject;
private var once=false;
private var trig:BoxCollider;
var send : DistractMesh;

function Start () 
{
//Debug.Log("Hellou");
//enemy = GameObject.Find("Enemy");
tr = transform;
//enemyT=enemy.transform;

} 
function OnCollisionEnter (col : Collision)
{
	
	
    if(col.gameObject.name == "Terrain")
    {
    		if(!once)
			{
				once=true;
    		//Debug.Log("HelloT");
    		//Debug.Log(enemyT.position);
    		meshcollide  = GameObject.CreatePrimitive(PrimitiveType.Cube);
			meshcollide.AddComponent(Rigidbody);
			meshcollide.transform.localScale=Vector3(25,25,25);
			meshcollide.AddComponent(DistractMesh);
			meshcollide.rigidbody.useGravity=false;
			Destroy (meshcollide.GetComponent(MeshRenderer));
			trig=meshcollide.GetComponent(BoxCollider);
			trig.isTrigger=true;
			//meshcollide.transform.parent =transform ;
			send=meshcollide.GetComponent(DistractMesh);
			send.Location=transform.position;
			meshcollide.transform.position = transform.position + Vector3(1,0,0);
    		   }
    }
    
}
