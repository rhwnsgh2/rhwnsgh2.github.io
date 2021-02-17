
var aTag = document.querySelector('a[href*="https://coupa.ng/"]')
if(aTag != null){
  console.log(aTag);
  window.location.href = aTag.href;
}