var app = new Vue({
	el: '#cyberapp',
	methods:{
		addLike(){
			this.readervotes +=1;
			this.readerlikes +=1;
		},
		addDislike(){
			this.readervotes +=1
		},
		selectViewTitle(index){
			this.viewTitle = index
			console.log(index);
		}
	},
	computed:{
		readerResp(){
			return (this.readerlikes / this.readervotes) *100
		},
		viewTitleName(){
			return this.options[this.viewTitle].title
		},
		viewTitleYear(){
			return this.options[this.viewTitle].year
		},
		viewTitleDirector(){
			return this.options[this.viewTitle].director
		},
	},
	data: {	
				viewTitle:0,
				title: 'Blade Runner',
				rank: 01,
				director: 'Ridley Scott',
				screenplay: 'Philip K. Dick, Hampton Fancher, David Peoples',
				year: '1982',
				time: '110m',
				lang: 'English',
				format: 'Motion Picture',
				tomato: '93%',
				siscore: 99,
				cyscore: 99,
				funscore: 80,
				readervotes: 5,
				readerlikes: 4,
				flag: false,
				summary: 'Boy meets replicant, boy kills other replicant, boy may be replicant?',
				review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
				poster: './assets/imgs/posters/bladerunner.jpeg',
				options: [
					{
						title:'Blade Runner', 
						year: '1982',
						director: 'Ridley Scott'
					},
					{
						title:'Akira', 
						year: '1988',
						director: 'b'
					},
					{
						title:'Max Headroom 20m into the future', 
						year: '1985',
						director: 'c'
					},
					{
						title:'12 Moknkeys', 
						year: '1995',
						director: 'Gilliam'
					},
					{
						title:'Robocop', 
						year: '1987'
					},
					{
						title:'Terminator', 
						year: '1984'
					},
					{
						title:'Stange Days', 
						year: '1995'
					},
					{
						title:'Ghost in the Shell', 
						year: '1993'
					},
					{
						title:'Blade Runner 2049', 
						year: '2018'
					},
					{
						title:'Total Recal', 
						year: '1980'
					},
					{
						title:'Alphaville', 
						year: '1967'
					},
					{
						title:'Altered Carbon', 
						year: '2018'
					},
					{
						title:'Chappie', 
						year: '2015'
					},
					{
						title:'Ready Palyer One', 
						year: '2018'
					},
					{
						title:'Jonny Mnemonic', 
						year: '1995'
					},
					{
						title:'Aeon Flux', 
						year: '1991'
					},
					{
						title:'Hardware', 
						year: '1990'
					},
					{
						title:'Children of Men', 
						year: '2006'
					},
					{
						title:'Elysium', 
						year: '2013'
					},
					{
						title:'Minortiy Report', 
						year: '2002'
					},
					{
						title:'AI', 
						year: '2001'
					},
					{
						title:'District 9', 
						year: '2009'
					},
					{
						title:'Demolition Man', 
						year: '1993'
					},
					{
						title:'FreeJack', 
						year: '1992'
					}
				]
			}
})

// [
// 			{
// 				title: 'Blade Runner',
// 				rank: 01,
// 				director: 'Ridley Scott',
// 				writer: 'Ridley Scott',
// 				year: '1982',
// 				time: '110m',
// 				lang: 'English',
// 				format: 'Motion Picture',
// 				tomato: '93%',
// 				siscore: 99,
// 				cyscore: 99,
// 				funscore: 80,
// 				flag: false,
// 				summary: 'Boy meets replicant, boy kills other replicant, boy may be replicant?',
// 				review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
// 				poster: './assets/imgs/posters/bladerunner.jpeg'
// 			},
// 			{
// 				title: 'Blade Runner 2047',
// 				rank: 02,
// 				director: ' ',
// 				writer: ' ',
// 				year: '2018',
// 				time: ' ',
// 				lang: ' ',
// 				format: ' ',
// 				tomato: ' ',
// 				siscore: 0,
// 				cyscore: 0,
// 				funscore: 0,
// 				flag: false,
// 				summary: ' ',
// 				review: ' ',
// 				poster: ' '
// 			},
// 			{
// 				title: 'Akira',
// 				rank: 02,
// 				director: ' ',
// 				writer: ' ',
// 				year: ' ',
// 				time: ' ',
// 				lang: ' ',
// 				format: ' ',
// 				tomato: ' ',
// 				siscore: 0,
// 				cyscore: 0,
// 				funscore: 0,
// 				flag: false,
// 				summary: ' ',
// 				review: ' ',
// 				poster: ' '
// 			},
// 			{
// 				title: 'Max Headroom: 20 Minutes into the Future',
// 				rank: 03,
// 				director: ' ',
// 				writer: ' ',
// 				year: ' ',
// 				time: ' ',
// 				lang: ' ',
// 				format: ' ',
// 				tomato: ' ',
// 				siscore: 0,
// 				cyscore: 0,
// 				funscore: 0,
// 				flag: false,
// 				summary: ' ',
// 				review: ' ',
// 				poster: ' '
// 			}
// 		]