physics=function(a,b,c,d,e,f){for(b=0,c=a.length,d=['dx','dy','x','y'],e=d.length;b<c;b++){for(f=0;f<e;f++){a[b][d[f]]+=a[b]['d'+d[f]];}}};
