self.addEventListener("install",event=>{self.skipWaiting()});
self.addEventListener("activate",event=>{event.waitUntil(self.clients.claim())});
self.addEventListener("push",event=>{
 let data={title:"New Restaurant Order",body:"A new order has arrived.",url:"./staff.html"};
 try{if(event.data)data={...data,...event.data.json()}}catch(e){if(event.data)data.body=event.data.text()}
 event.waitUntil(self.registration.showNotification(data.title||"New Restaurant Order",{
  body:data.body||"A new order has arrived.",
  icon:data.icon||"./favicon.ico",
  badge:data.badge||"./favicon.ico",
  tag:data.tag||("restaurant-order-"+Date.now()),
  renotify:!!data.renotify,
  vibrate:[250,100,250],
  data:{url:data.url||"./staff.html",orderId:data.orderId||null}
 }))
});
self.addEventListener("notificationclick",event=>{
 event.notification.close();
 const target=new URL(event.notification.data?.url||"./staff.html",self.location.origin).href;
 event.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(clients=>{
  for(const client of clients){if(client.url.startsWith(self.location.origin)){client.focus();return client.navigate(target)}}
  return self.clients.openWindow(target)
 }))
});
