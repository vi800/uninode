function nickname(name)
{
	surnames = ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Wheeler", "Hannigan"]
	return name.slice(0, 4) + " " + surnames[Math.floor(Math.random()*7)];
}

//example
console.log(nickname("Bulbasaur"));
console.log(nickname("Bub"));
