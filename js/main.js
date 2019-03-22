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
		viewTitleYear(){
			return this.titles[this.viewTitle].year
		},
		viewTitleDirector(){
			return this.titles[this.viewTitle].director
		},
		viewTitleSource(){
			return this.titles[this.viewTitle].source
		},
		viewTitleScreenplay(){
			return this.titles[this.viewTitle].screenplay
		},
		viewTitleCast(){
			return this.titles[this.viewTitle].cast
		},
		viewTitleTime(){
			return this.titles[this.viewTitle].time
		},
		viewTitleLang(){
			return this.titles[this.viewTitle].lang
		},
		viewTitleFormat(){
			return this.titles[this.viewTitle].format
		},
		viewTitleTomato(){
			return this.titles[this.viewTitle].tomato
		},
		viewTitleSiscore(){
			return this.titles[this.viewTitle].siscore
		},
		viewTitleCyscore(){
			return this.titles[this.viewTitle].cyscore
		},
		viewTitleFunscore(){
			return this.titles[this.viewTitle].funscore
		},
		viewTitleSummary(){
			return this.titles[this.viewTitle].summary
		},
		viewTitleReview(){
			return this.titles[this.viewTitle].review
		},
		viewTitlePoster(){
			return ('./assets/imgs/title-images/'+this.titles[this.viewTitle].poster)
		},
		viewTitleScreens(){
			return ('./assets/imgs/posters/'+this.titles[this.viewTitle].screens)
		},
		viewTitleLinks(){
			return this.titles[this.viewTitle].links
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
		review: 'In development',
		poster: 'bladerunner.jpeg',
		titles: [
			{
				name:'Blade Runner', 
				rank: 01,
				year: '1982',
				director: 'Ridley Scott',
				screenplay: 'Philip K. Dick, Hampton Fancher, David Peoples',
				source: 'Short Story Do Androids Dream of Electric Sheep by Philp K. Dick',
				music: '',
				cast: ['Harrison Ford', 'Rutger Hoawrd', 'Sean Young','Daryl Hanna'],
				time: '110m',
				lang: 'English',
				format: 'Motion Picture',
				tomato: '93%',
				siscore: 0.99,
				cyscore: 0.99,
				funscore: 0.80,
				readervotes: 5,
				readerlikes: 4,
				flag: false,
				summary: 'Boy meets replicant, boy kills other replicant, boy may be replicant?',
				review: 'In development',
				poster: 'bladerunner_poster.jpg',
				screens: [],
				links:[
				 {
					wiki:'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Akira', 
				rank: 02,
				year: '1988',
				director: 'Katsuhiro Otomo',
				screenplay: 'Otomo and Izo Hashimoto',
				source: 'Manga by Otomo Hashimoto',
				music: '',
				cast: ['Nozomu Sasaki', 'Mami Koyama', 'Mitsuo Iwata', 'Tesshō Genda'],
				time: '124m',
				lang: 'Nipponeses',
				format: 'Annimated Feature',
				tomato: '0/0%',
				siscore: 0.98,
				cyscore: 0.99,
				funscore: 0.70,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'akira-org_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Max Headroom 20m into the future', 
				rank: 03,
				year: '1985',
				director: 'Rocky Morton',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0.96,
				cyscore: 1,
				funscore: 0.8,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'max-headroom_cover.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'12 Moknkeys', 
				rank: 04,
				year: '1995',
				director: 'Terry Gilliam',
				screenplay: 'David Peoples, Janet Peoples',
				source: 'La Jitee, by Chris Marker',
				music: 'Paul Buckmaster',
				cast: ['Bruce Willis','Madeleine Stowe','Brad Pitt','Christopher Plummer'],
				time: '130m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '89/88%',
				siscore: 0.97,
				cyscore: 0.85,
				funscore: 0.8,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: '12-monkeys_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/12_Moknkeys',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Robocop',
				rank: 05, 
				year: '1987',
				director: 'Verhoeven',
				screenplay: 'Edward Neumeier, Michael Miner',
				source: '',
				music: '',
				cast: ['Peter Weller','Nancy Allen','Daniel OHerlihy','Ronny Cox','Kurtwood Smith','Miguel Ferrer'],
				time: '103m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'robo-cop_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/RoboCop',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'The Terminator', 
				rank: 06,
				year: '1984',
				director: 'James Cameron',
				screenplay: 'James Cameron, Gale Anne Hurd',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '108m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/The_Terminator',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Stange Days', 
				rank: 07,
				year: '1995',
				director: 'Kathryn Bigelow',
				screenplay: 'James Cameron, Jay Cocks',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '146m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'strage-days_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Ghost in the Shell', 
				rank: 08,
				year: '1993',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'Nipponeses',
				format: 'Annimated Feature',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Blade Runner 2049', 
				rank: 09,
				year: '2018',
				director: 'Villeneuve',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Total Recal', 
				rank: 10,
				year: '1980',
				director: 'Verhoeven',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'total-recall_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Alphaville une étrange aventure de Lemmy Caution', 
				rank: 11,
				year: '1967',
				director: 'Jean-Luc',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Altered Carbon', 
				rank: 12,
				year: '2018',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'Television Series',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Chappie', 
				rank: 13,
				year: '2015',
				director: 'Blomkamp',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '120m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '33/56%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Ready Player One', 
				rank: 14,
				year: '2018',
				director: 'Spielberg',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '146m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '72/77%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Johnny Mnemonic',
				rank: 15, 
				year: '1995',
				director: 'Robert Longo',
				screenplay: 'William Gibson',
				source: 'based on the short story by William Gibson',
				music: '',
				cast: ['Keanu Reeves','Dolph Lundgren','Takeshi','Ice-T','Dina Meyer'],	
				time: '96m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '13/31%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'johnny-mnemonic_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/Johnny_Mnemonic_(film)',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Aeon Flux', 
				year: '1991',
				rank: 16, 
				year: '1991',
				director: 'Peter Chung',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				cast: ['Denise Poirier','John Rafter Lee','Julia Fletcher'],
				time: '5m; 30m, 3 seasons',
				lang: 'deafult',
				format: 'Animated Shorts; Animated television series',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'Aeon-Flux_logo.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/%C3%86on_Flux',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Aeon Flux', 
				year: '2005',
				rank: 26, 
				year: '1991',
				director: 'Karyn Kusama',
				screenplay: 'Phil Hay, Matt Manfredi',
				source: '',
				music: '',
				cast: ['Charlize Theron','Marton Csokas','Jonny Lee Miller','Sophie Okonedo','Pete Postlethwaite'],
				time: '92m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'aeon-flux-film_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/%C3%86on_Flux_(film)',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Hardware',
				rank: 17, 
				year: '1990',
				director: 'Richard Stanley',
				screenplay: 'Richard Stanley',
				source: '"SHOK!" by Steve MacManus and Kevin ONeill',
				music: 'Simon Boswell',
				cast: ['Dylan McDermott','Stacey Travis','John Lynch','William Hootkins','Iggy Pop'],
				time: '',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0.80,
				cyscore: 0.88,
				funscore: 0.6,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'hardware_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/Hardware_(film)',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Children of Men', 
				rank: 18,
				year: '2006',
				director: 'Alfonso Cuarón',
				screenplay: 'Alfonso Cuarón Timothy J. Sexton, David Arata, Mark Fergus and Hawk Ostby',
				source: 'The Children of Men by P. D. James',
				music: 'John Tavener',
				cast: ['Clive Owen','Julianne Moore','Clare-Hope Ashitey','Michael Caine','Chiwetel Ejiofor','Pam Ferris','Charlie Hunnam'],
				time: '109m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0.96,
				cyscore: 0.8,
				funscore: 0.5,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'children-of-men_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/Children_of_Men',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Elysium', 
				rank: 19,
				year: '2013',
				director: 'Neill Blomkamp',
				screenplay: 'Neill Blomkamp',
				source: '',
				music: 'Ryan Amon',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '109m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0.70,
				cyscore: 0.8,
				funscore: 0.7,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'elysium-2013-movie_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/Elysium_(film)',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Minortiy Report', 
				rank: 20,
				year: '2002',
				director: 'Steven Spielberg',
				screenplay: 'Scott Frank, Jon Cohen',
				source: '"The Minority Report" by Philip K. Dick',
				music: 'John Williams',
				cast: ['Tom Cruise','Colin Farrell','Samantha Morton','Max von Sydow'],
				time: '145m',
				lang: 'English',
				format: 'Feature Film',
				tomato: '0/0%',
				siscore: 0.78,
				cyscore: 0.8,
				funscore: 0.7,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'minority-report_poster.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/Minority_Report_(film)',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'AI', 
				rank: 21,
				year: '2001',
				director: 'Steven Spielberg',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'District 9', 
				rank: 22,
				year: '2009',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Demolition Man', 
				rank: 23,
				year: '1993',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
				readervotes: 0,
				readerlikes: 0,
				flag: false,
				summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'FreeJack', 
				rank: 24,
				year: '1992',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Gattaca', 
				rank: 25,
				year: '2024',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Runaway', 
				rank: 99,
				year: '1984',
				director: 'Chriton',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '100m',
				lang: 'deafult',
				format: 'deafult',
				tomato: '44/32%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Alita', 
				rank: 99,
				year: '2019',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Upgrade', 
				rank: 99,
				year: '2018',
				director: 'Whannell',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '95m',
				lang: 'deafult',
				format: 'deafult',
				tomato: '87/86%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'Mute', 
				rank: 99,
				year: '2018',
				director: 'Duncan Jones',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '126m',
				lang: 'deafult',
				format: 'deafult',
				tomato: '20/48%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			},
			{
				name:'', 
				rank: 99,
				year: '2024',
				director: 'Alain Smithee',
				screenplay: 'Alain Smithee',
				source: '',
				music: '',
				// cast: ['John Doe', 'Jane Doe', 'James Doe'],
				time: '',
				lang: 'deafult',
				format: 'deafult',
				tomato: '0/0%',
				siscore: 0,
				cyscore: 0,
				funscore: 0,
					readervotes: 0,
					readerlikes: 0,
					flag: false,
					summary: 'In development',
				review: 'In development',
				poster: 'default_off-world.jpg',
				screens: [],
				links:[
				 {
					wiki: 'https://en.wikipedia.org/wiki/',
					imdb:'',
					rt:''
				  }
				]
			}
		]
	}
})


					

