const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
         
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");

const studentIvanNode = listNode.querySelector("student");
const nameIvanNode = studentIvanNode.querySelector("name");
const firstIvanNode = nameIvanNode.querySelector("first");
const secondIvanNode = nameIvanNode.querySelector("second");
const ageIvanNode = studentIvanNode.querySelector("age");
const profIvanNode = studentIvanNode.querySelector("prof");

const studentPetrNode = listNode.querySelectorAll("student")[1];
const namePetrNode = studentPetrNode.querySelector("name");
const firstPetrNode = namePetrNode.querySelector("first");
const secondPetrNode = namePetrNode.querySelector("second");
const agePetrNode = studentPetrNode.querySelector("age");
const profPetrNode = studentPetrNode.querySelector("prof");

const langAttrIvan = nameIvanNode.getAttribute('lang');
const langAttrPetr = namePetrNode.getAttribute('lang');

const result = {
  list: [{
    name: firstIvanNode.textContent + ' ' +  secondIvanNode.textContent,
    age: Number(ageIvanNode.textContent),
    prof: profIvanNode.textContent,
    lang: langAttrIvan
  },
    {
    name: firstPetrNode.textContent + ' ' +  secondPetrNode.textContent,
    age: Number(agePetrNode.textContent),
    prof: profPetrNode.textContent,
    lang: langAttrPetr
    }
  ]
}

console.log(result);