#pragma strict

 private var timer = 0.0; 
 var bobbingSpeed = 0.17; 
 var bobbingAmount = 0.08; 
 var midpoint = 0.68; 
 
 private var timerx = 0.0; 
 var bobbingSpeedx = 0.13; 
 var bobbingAmountx = 0.5; 
 var midpointx = 0.68; 
 
 private var waveslice:float;
 private var waveslicex:float;
 
private var horizontal:float;
private var vertical:float;

private var translateChange:float;
private var translateChangex:float;

private var totalAxes:float;
private var totalAxesx:float;
function Update () { 

	if(!Input.GetKey("w"))
	{
		//private var timerx = 0.0; 
 bobbingSpeedx = 0.03; 
 bobbingAmountx = 0.1; 
 midpointx = 0.5;
	}
	else
	{
		//private var timerx = 0.0; 
 bobbingSpeedx = 0.09; 
 bobbingAmountx = 0.2; 
 midpointx = 0.5;	
	}
    waveslice = 0.0; 
    horizontal = Input.GetAxis("Horizontal"); 
    vertical = Input.GetAxis("Vertical"); 
    if (Mathf.Abs(horizontal) == 0 && Mathf.Abs(vertical) == 0) { 
       timer = 0.0; 
    } 
    else { 
       waveslice = Mathf.Sin(timer); 
       waveslicex = Mathf.Sin(timerx);
       
       timer = timer + bobbingSpeed; 
       timerx = timerx + bobbingSpeedx;
       if (timer > Mathf.PI * 2) { 
          timer = timer - (Mathf.PI * 2); 
       } 
       if (timerx > Mathf.PI * 2) { 
          timerx = timerx - (Mathf.PI * 2); 
       }
    } 
    if (waveslice != 0) { 
       translateChange = waveslice * bobbingAmount; 
       totalAxes = Mathf.Abs(horizontal) + Mathf.Abs(vertical); 
       
       totalAxes = Mathf.Clamp (totalAxes, 0.0, 1.0); 
       translateChange = totalAxes * translateChange; 
       if (!Input.GetKey("e"))
       transform.localPosition.y = midpoint + translateChange; 
        
    } 
    else { 
    if (!Input.GetKey("e"))
       transform.localPosition.y = midpoint; 
      
    } 
    
    
     if (waveslicex != 0) { 
       translateChangex = waveslicex * bobbingAmountx; 
       totalAxesx = Mathf.Abs(horizontal) + Mathf.Abs(vertical); 
       
       totalAxesx = Mathf.Clamp (totalAxesx, 0.0, 1.0); 
       translateChangex = totalAxesx * translateChangex; 
       //transform.localPosition.y = midpoint + translateChange; 
        if (Input.GetKey("e"))
        	{
        		transform.localPosition.x = midpointx + translateChangex;
        			
        	}
    } 
    else { 
       //transform.localPosition.y = midpoint; 
       if (Input.GetKey("e"))
       {
       		transform.localPosition.x = midpointx; 
       }
    } 
    
    
 }
