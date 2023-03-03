// const data = [
//     'How to become JS expert',
// 	'JS is Javascript',
// 	'Coding is Fun',
// 	'Programmer do coding everyday',
// 	'Everyday is fun',
//     'JSX is React JS'
// ];



// //selector
// const btnSearch = document.getElementById("btnSearch");
// const search = document.getElementsByName("keyword")[0];
// const data_section = document.getElementsByClassName("data")[0];

// //event
// btnSearch.addEventListener("click", event => {
//     searchData();
// });

// search.addEventListener("keyup", event => {
//     if (event.keyCode === 13) {
//         searchData();
//     }
// })

// //function search
// function searchData() {
//     const search_value = search.value.toLowerCase();
//     const data_filtered = data.slice(0);

//     data_section.innerHTML = "";
//     for (let i = 0; i < data_filtered.length; i++) {
//         if (data_filtered[i].toLowerCase().includes(search_value)) {
//             data_section.innerHTML += "<a href=''>"+data_filtered[i]+"</a>"
//         } else {
//             data_section.innerHTML + "Upss belum tersedia artikel apapun disini."+search_value
//         }
        
//     };
// };

function search() {
    const searchEngine = document.form("aksi").querySelector("pencarian")
}