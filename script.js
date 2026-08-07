const links=document.querySelectorAll('a[href^="#"]');
links.forEach(link=>link.addEventListener('click',()=>document.activeElement?.blur()));
