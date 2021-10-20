document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(json => renderDogs(json))

    let globalId;
    const dogForm = document.querySelector('#dog-form');
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setDog(globalId);
    });

    function renderDogs(dogs) {
        dogs.forEach(dogObj => {
            let newRow = document.createElement("tr");
            let name = document.createElement('td');
            let breed = document.createElement('td');
            let sex = document.createElement('td');
            let tableBody = document.querySelector('#table-body');
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit Dog';
            
            name.className = `dog-${dogObj.id}`;
            breed.className = `dog-${dogObj.id}`;
            sex.className = `dog-${dogObj.id}`;
            name.textContent = dogObj.name;
            breed.textContent = dogObj.breed;
            sex.textContent = dogObj.sex;
            newRow.append(name, breed, sex, editBtn);
            tableBody.append(newRow)

            editBtn.addEventListener('click', () => editDog(name.textContent, breed.textContent, sex.textContent, name.className));
        });
    }

    function editDog(name, breed, sex, id) {
        let inName = document.getElementsByName('name');
        let inBreed = document.getElementsByName('breed');
        let inSex = document.getElementsByName('sex');
        globalId = id;
        inName[0].value = name;
        inBreed[0].value = breed;
        inSex[0].value = sex;
        console.log(inName);
    }

    function setDog(id) {
        // console.log(id)
        let dogData = document.getElementsByClassName(id);
        const newName = document.getElementsByName('name')[0].value;
        const newBreed = document.getElementsByName('breed')[0].value;
        const newSex = document.getElementsByName('sex')[0].value;
        dogData[0].textContent = newName;
        dogData[1].textContent = newBreed;
        dogData[2].textContent = newSex;
        dogForm.reset();


        // name = dogName;
        // breed = dogBreed;
        // sex = dogSex;

    }
})