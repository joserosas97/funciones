let color = '';

        document.getElementById('blue').addEventListener('click', function() {
            this.style.backgroundColor = 'black';
        });
        document.getElementById('red').addEventListener('click', function() {
            this.style.backgroundColor = 'black';
        });
        document.getElementById('green').addEventListener('click', function() {
            this.style.backgroundColor = 'black';
        });
        document.getElementById('yellow').addEventListener('click', function() {
            this.style.backgroundColor = 'black';
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'a') {
                color = 'pink';
            } else if (event.key === 's') {
                color = 'orange';
            } else if (event.key === 'd') {
                color = 'skyblue';
            } else if (event.key === 'q') {
                createDiv('purple');
            } else if (event.key === 'w') {
                createDiv('gray');
            } else if (event.key === 'e') {
                createDiv('brown');
            }
            if (event.key === 'a' || event.key === 's' || event.key === 'd') {
                document.getElementById('key').style.backgroundColor = color;
            }
        });

        let createDiv = function(color) {
            let newDiv = document.createElement('div');
            newDiv.style.width = '200px';
            newDiv.style.height = '200px';
            newDiv.style.backgroundColor = color;
            newDiv.style.border = '1px solid black';
            document.body.appendChild(newDiv);
        }