<html>
<body>

<a id="email" href="mailto:jokker@batman.com"> Bat Man </a>

<script>
window.onload = makeEmail();

function makeEmail() {
// blank email
    var mailsplitted
     = ['surf', 'and' , 'mind@' ,'gm' , 'ail' '.com' , ];
     var x = document.getElementById("email");
     x.href = 'mailto:' + mailsplitted.join('');
     x.innerHTML= mailsplitted.join('');
    }
</script>
</body>
</html>
