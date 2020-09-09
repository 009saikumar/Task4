var cat = {
    name: 'Fluffy',
    activities: ['play','eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   };
   cat.height = 3;
   cat.weight = 10;
   cat.name = 'Fluffyy';
   for(let ele of cat.catFriends)
       console.log(ele.name + "activities are" + ele.activities);
   var totalWeight = 0;
   var totalActivities = 0;
   for(let ele of cat.catFriends){
       console.log(ele.name);
       totalWeight += ele.weight;
       totalActivities += ele.activities.length;
       ele.activities.push('singing');
   }
   console.log(totalWeight);
   console.log(totalActivities+cat.activities.length);
   console.log(cat);
   let res = cat.catFriends.furcolor='red';
   console.log(res);
   