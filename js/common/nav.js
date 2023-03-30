class StickyNavigation {
	constructor() {
	  this.currentId = null;
	  this.currentTab = null;
	  this.tabContainerHeight = 70;
	  let self = this;
  
	  // Add click event listener to each tab
	  document.querySelectorAll('.ai-intro-tab').forEach(tab => {
		tab.addEventListener('click', event => {
		  event.preventDefault();
		  self.onTabClick(event, tab);
		});
	  });
  
	  // Add scroll event listener to window
	  window.addEventListener('scroll', () => {
		self.onScroll();
	  });
  
	  // Add resize event listener to window
	  window.addEventListener('resize', () => {
		self.onResize();
	  });
	}
  
	// Handler for tab click event
	onTabClick(event, element) {
	  let scrollTop = document.querySelector(element.getAttribute('href')).offsetTop - this.tabContainerHeight + 1;
	  window.scrollTo({
		top: scrollTop,
		behavior: 'smooth'
	  });
	}
  
	// Handler for scroll event
	onScroll() {
	  this.checkTabContainerPosition();
	  this.findCurrentTabSelector();
	}
  
	// Handler for resize event
	onResize() {
	  if (this.currentId) {
		this.setSliderCss();
	  }
	}
  
	// Check if tab container is at the top of the page
	checkTabContainerPosition() {
	  let offset = document.querySelector('.ai-intro-tabs').offsetTop + document.querySelector('.ai-intro-tabs').offsetHeight - this.tabContainerHeight;
	  if (window.pageYOffset > offset) {
		document.querySelector('.ai-intro-tabs-container').classList.add('ai-intro-tabs-container--top');
	  } else {
		document.querySelector('.ai-intro-tabs-container').classList.remove('ai-intro-tabs-container--top');
	  }
	}
  
	// Find the currently selected tab
	findCurrentTabSelector() {
	  let newCurrentId;
	  let newCurrentTab;
	  let self = this;
	  document.querySelectorAll('.ai-intro-tab').forEach(tab => {
		let id = tab.getAttribute('href');
		let offsetTop = document.querySelector(id).offsetTop - self.tabContainerHeight;
		let offsetBottom = offsetTop + document.querySelector(id).offsetHeight;
		if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
		  newCurrentId = id;
		  newCurrentTab = tab;
		}
	  });
	  if (this.currentId != newCurrentId || this.currentId === null) {
		this.currentId = newCurrentId;
		this.currentTab = newCurrentTab;
		this.setSliderCss();
	  }
	}
  
	// Set the CSS of the tab slider
	setSliderCss() {
	  let width = 0;
	  let left = 0;
	  if (this.currentTab) {
		width = this.currentTab.offsetWidth;
		left = this.currentTab.offsetLeft;
	  }
	  document.querySelector('.ai-intro-tab-slider').style.width = width + 'px';
	  document.querySelector('.ai-intro-tab-slider').style.left = left + 'px';
	}
  }
  
  new StickyNavigation();
  