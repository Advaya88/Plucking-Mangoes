class Launcher{

constructor(bodyA, pointB){

    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.004,
        length: 10
    }
    this.launcherObject = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.launcherObject);

    

}
display(){
   if(this.launcherObject.bodyA){

    var pointA = this.launcherObject.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

   }

   }


   attach(body){
this.launcherObject.bodyA = body


   }
   fly(){
    
    this.launcherObject.bodyA = null  

  }

}