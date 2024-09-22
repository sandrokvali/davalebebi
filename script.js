var georgianLIT = '' + '|' + 'თემა "შუშანიკისა და ვარსქენის დახასიათება"'
var italian = 'არაფერი' + '|' + 'არაფერი'
var math = 'პარასკევს საკონტროლო' + '|' + 'გვ 61 №13-20'
var bio = 'ოთხშაბათს საკონტროლო პირველ 3 პარაგრაფზე' + '|' + 'არაფერი'
var phy = 'პარაგრაფი №6' + '|' + 'ამოცანები 1-10'
var chem = 'იზოტროპები' + '|' + 'ამოცანები'
var his1 = 'პარაგრაფი №7, 8 60გვ-მდე' + '|' + 'გვ 55 №2, გვ 57 №4, დიდი რვეული გვ24 ბ'
var his2 = 'პარაგრაფი 33/34 მთლიანად' + '|' + 'ინფორმაცია მოვიძიოთ ჟუზეპე მარია გარიბალდიზე'
var moqa = '' + '|' + ''
var art = '' + '|' + ''
// var music = '' + '|' + ''
var geo = 'პარაგრაფი 6' + '|' + 'არაფერი'
var rus = '' + '|' + ''
var eka = '' + '|' + ''
var lia = '' + '|' + ''


var dateTXT = 'ბოლოს განახლდა 2023 წლის 11 თებერვალს (შაბათი)'
// var dateTXT = 'საიტი განახლების პროცესშია!'




function str(text, num) {
  var myArray = text.split('|');
  return myArray[num];
}

function idText(id, text) {
	document.getElementById(id).innerHTML = text
}

idText('date', dateTXT)

//ქართული ლიტერატურა
  idText('qart1', str(georgianLIT, 0))
  idText('qart2', str(georgianLIT, 1))

// ქართული ენა
  idText('ital1', str(italian, 0))
  idText('ital2', str(italian, 1))

//მათემატიკა
  idText('math1', str(math, 0))
  idText('math2', str(math, 1))

//ბიოლოგია
  idText('bio1', str(bio, 0))
  idText('bio2', str(bio, 1))

// ფიზიკა
  idText('phy1', str(phy, 0))
  idText('phy2', str(phy, 1))

// ქიმია
  idText('chem1', str(chem, 0))
  idText('chem2', str(chem, 1))

// ისტორია
  idText('his1', str(his1, 0))
  idText('his2', str(his1, 1))
  idText('his3', str(his2, 0))
  idText('his4', str(his2, 1))

// მოქალაქეობა
  idText('moqa1', str(moqa, 0))
  idText('moqa2', str(moqa, 1))

// ხელოვნება
  idText('art1', str(art, 0))
  idText('art2', str(art, 1))

// მუსიკა
  // idText('music1', str(music, 0))
  // idText('music2', str(music, 1))

// გეოგრაფია
  idText('geo1', str(geo, 0))
  idText('geo2', str(geo, 1))

// რუსული
  idText('rus1', str(rus, 0))
  idText('rus2', str(rus, 1))

// ინგლისური ეკა
  idText('eka1', str(eka, 0))
  idText('eka2', str(eka, 1))

//ინგლისური ლია
  idText('lia1', str(lia, 0))
  idText('lia2', str(lia, 1))