(function(){
  console.log('this is the start');
  
  setTimeout(()=>{console.log('this is a message from the callback');})

  console.log('this is just a message');

  setTimeout(()=>{console.log('this is a message from the callback1');},0)

  console.log('this is the end');
})()
