#pragma strict



	
	var maxDist=100;
	function  Update (){
		var hit: RaycastHit;
		if (Physics.Raycast(transform.position, transform.forward,hit, maxDist))
		{
			
			Debug.Log(hit);
			Debug.DrawLine (transform.position, hit.point, Color.cyan);
		}
		
	}
