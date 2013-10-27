#pragma strict


	
function Update () {

	
	if(Input.GetKeyDown ("w"))
	{
		
		rigidbody.AddForce(1000,0,0);
		
	}
	if(Input.GetKeyDown ("s"))
	{
		
		rigidbody.AddForce(-1000,0,0);
		
	}
	if(Input.GetKeyDown ("d"))
	{
		
		rigidbody.AddForce(0,0,1000);
		
	}
	if(Input.GetKeyDown ("a"))
	{
		
		rigidbody.AddForce(0,0,-1000);
		
	}
}



