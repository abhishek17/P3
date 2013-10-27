#pragma strict



var isWalking=false;
function Update ()

{
//horizontal is 1 if a or d is pressed. Slly for Vertical
	
	 if ( Input.GetAxis( "Horizontal" ) || Input.GetAxis( "Vertical" ) )
    {
       
         // Running
         //Debug.Log("dfsdf");
         isWalking = true;
         
 
	}
	else
	{
		isWalking=false;
	}
	
	if(isWalking&&!(audio.isPlaying))
	{
		//Debug.Log("dfsdf");
		audio.Play();
	}
	if(!isWalking)
	{
		audio.Stop();
	}
	
	



}