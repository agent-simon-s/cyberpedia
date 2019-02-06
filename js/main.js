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
			return this.titles[this.viewTitle].name
		},
		viewTitleRank(){
			return this.titles[this.viewTitle].rank
		},
		viewTitleRank(){
			return this.options[this.viewTitle].rank
		},
		viewTitleYear(){
			return this.titles[this.viewTitle].year
		},
		viewTitleDirector(){
			return this.titles[this.viewTitle].director
		},
		viewTitleScreenplay(){
			return this.titles[this.viewTitle].screenplay
		},
		viewTitleTime(){
			return this.titles[this.viewTitle].time
		},
<<<<<<< HEAD
		viewTitlePoster(){
			return ('./assets/imgs/posters/'+this.titles[this.viewTitle].poster)
=======
		viewTitleScreenplay(){
			return this.options[this.viewTitle].screenplay
		},
		viewTitleTime(){
			return this.options[this.viewTitle].time
		},
		viewTitlePoster(){
			return ('./assets/imgs/posters/'+this.options[this.viewTitle].poster)
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
		},
		
	},
	data: {	
				viewTitle:0,
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
				poster: 'bladerunner.jpeg',
<<<<<<< HEAD
				titles: [
					{
						name:'Blade Runner', 
=======
				options: [
					{
						title:'Blade Runner', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 01,
						year: '1982',
						director: 'Ridley Scott',
						screenplay: 'Philip K. Dick, Hampton Fancher, David Peoples',
						source: 'Short Story Do Androids Deram of Electric Sheep by Philp K. Dick',
						cast: ['Harrison Ford', 'Rutger Hoawrd', 'Sean Young','Daryl Hanna'],
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
						poster: 'bladerunner.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Akira', 
=======
						title:'Akira', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 02,
						year: '1988',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: 'Manga by ',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Max Headroom 20m into the future', 
=======
						title:'Max Headroom 20m into the future', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 03,
						year: '1985',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'12 Moknkeys', 
=======
						title:'12 Moknkeys', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 04,
						year: '1995',
						director: 'Terry Gilliam',
						screenplay: 'Alain Smithee',
						source: 'La Jitee, by Chris Marker',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Robocop',
=======
						title:'Robocop',
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 05, 
						year: '1987',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Terminator', 
=======
						title:'Terminator', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 06,
						year: '1984',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Stange Days', 
=======
						title:'Stange Days', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 07,
						year: '1995',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Ghost in the Shell', 
=======
						title:'Ghost in the Shell', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 08,
						year: '1993',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Blade Runner 2049', 
=======
						title:'Blade Runner 2049', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 09,
						year: '2018',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Total Recal', 
=======
						title:'Total Recal', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 10,
						year: '1980',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Alphaville', 
=======
						title:'Alphaville', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 11,
						year: '1967',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Altered Carbon', 
=======
						title:'Altered Carbon', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 12,
						year: '2018',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Chappie', 
=======
						title:'Chappie', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 13,
						year: '2015',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Ready Palyer One', 
=======
						title:'Ready Palyer One', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 14,
						year: '2018',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Jonny Mnemonic',
=======
						title:'Jonny Mnemonic',
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 15, 
						year: '1995',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Aeon Flux', 
=======
						title:'Aeon Flux', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						year: '1991',
						rank: 16, 
						year: '1991',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Hardware',
=======
						title:'Hardware',
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 17, 
						year: '1990',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Children of Men', 
=======
						title:'Children of Men', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 18,
						year: '2006',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Elysium', 
=======
						title:'Elysium', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 19,
						year: '2013',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Minortiy Report', 
=======
						title:'Minortiy Report', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 20,
						year: '2002',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'AI', 
=======
						title:'AI', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 21,
						year: '2001',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'District 9', 
=======
						title:'District 9', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 22,
						year: '2009',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'Demolition Man', 
=======
						title:'Demolition Man', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 23,
						year: '1993',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					},
					{
<<<<<<< HEAD
						name:'FreeJack', 
=======
						title:'FreeJack', 
>>>>>>> 556e0ba9288d3145249254ce7c026fa2b0d1c93f
						rank: 24,
						year: '1992',
						director: 'Alain Smithee',
						screenplay: 'Alain Smithee',
						source: '',
						cast: ['John Doe', 'Jane Doe', 'James Doe'],
						time: '',
						lang: 'deafult',
						format: 'deafult',
						tomato: 0,
						siscore: 0,
						cyscore: 0,
						funscore: 0,
						readervotes: 0,
						readerlikes: 0,
						flag: false,
						summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						review: 'Libero velit, impedit aliquam a, ipsum in reiciendis cum corrupti vero nulla minima nobis totam, possimus tempora delectus. Perspiciatis sint accusantium hic.',
						poster: 'default.jpeg',
						screens: [],
						links:[]
					}
				]
			}
})

