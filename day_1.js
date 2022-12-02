const gifts = ['book','game','socks'];

wrapping = gifts => gifts.map(x => (console.log(`${'*'.repeat(x.length+2)}\n*${x}*\n${'*'.repeat(x.length+2)}`)));
console.log(wrapping(gifts));
