var port = document.querySelector('.port-class')
var resume = document.querySelector('.resume-class')
var about = document.querySelector('.about-class')
var contact = document.querySelector('.contact-class')
 var myPort = document.querySelector('.portfolio')
 var myResume = document.querySelector('.resume')
 var myContact = document.querySelector('.Contact')
 var myAbout = document.querySelector('.about-me')


port.addEventListener('click', function(){
    
  
    myPort.style.display = 'block';
    myResume.style.display = 'none';
    myContact.style.display = 'none'
    myAbout.style.display = 'none'
})

resume.addEventListener('click', function(){
    
    
   myResume.style.display = 'block';
    myPort.style.display = 'none'
    myContact.style.display = 'none'
    myAbout.style.display = 'none'
    
    console.log(myResume)
})
contact.addEventListener('click', function(){
    
    myContact.style.display = 'block'
    myPort.style.display = 'none';
    myResume.style.display = 'none';
    myAbout.style.display = 'none'
    
    console.log('hula')
})

about.addEventListener('click', function(){
    myAbout.style.display = 'block'
    myPort.style.display = 'none';
    myResume.style.display = 'none';
    myContact.style.display = 'none'
    
    console.log('hola')
})

