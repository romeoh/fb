var  userName
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnFb = document.querySelector('#btnFb')
	,dataMale, dataFemale
	,jogeun0, jogeun1, jogeun2 


window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnFb.addEventListener('click', goLink, false);
}

// 페북으로 확인
function goLink(){

	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
		,dataRan = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	FB.init({
		appId      : '575459299155222', // App ID
		channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true  // parse XFBML
	})
	
	postMsg += '[3년뒤 마이카 알아보기]\n';
	postMsg += '3년뒤 ' + userName + '님의 차는 ' + data[dataRan]['car'] + '입니다.\n\n';
	postMsg += 'http://goo.gl/Vbd2u\n';

	
	// 로그인
	console.log(postMsg, data[dataRan]['photo'])
	
	/**/
	FB.login(function(response) {
		if (response.authResponse) {
			imgURL = 'http://romeoh.github.io/fb/img/' + data[dataRan]['photo'];
			FB.api('/me/photos', 'post', {
				message: postMsg,
				//access_token: accessToken, 
				url: imgURL
			}, function (response) {

				if (!response || response.error) {
					//console.log(response)
					//alert('Error occured:' + response);
				} else {
					alert('항상 행운을 빌어요~^^');
				}
			});
		}
	}, {scope: 'publish_actions, user_photos'});

return



	postMsg += '[3년뒤 마이카]\n';
	postMsg += '3년뒤 ' + userName + '님의 차는 ' + data[dataRan]['car'] + '입니다.\n\n';
	postMsg += 'http://goo.gl/Vbd2u\n';

	urlMsg = {
		title: '3년뒤 마이카',
		desc: data[dataRan]['car'],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data[dataRan]['photo'] ],
		type:'article'
	}
console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '3년뒤 마이카',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "3년뒤 마이카",
		url: "http://goo.gl/Vbd2u",
		appid: "funnyApp",
		appver: "1.0",
		appname: "3년뒤 마이카",
		type: "link"
	});
}


data = [
	{'photo': 'car0.jpg',  'car': 'SM5 TCE'},
	{'photo': 'car1.jpg',  'car': '쏘나타 더 브릴리언트'},
	{'photo': 'car2.jpg',  'car': '말리부'},
	{'photo': 'car3.jpg',  'car': 'K5'},
	{'photo': 'car4.jpg',  'car': 'i40'},
	{'photo': 'car5.jpg',  'car': '현대 미스트라 컨셉트'},
	{'photo': 'car6.jpg',  'car': '스파크'},
	{'photo': 'car7.jpg',  'car': '모닝'},
	{'photo': 'car8.jpg',  'car': '레이'},
	{'photo': 'car9.jpg',  'car': 'i10'},
	{'photo': 'car10.jpg', 'car': '다마스'},
	{'photo': 'car11.jpg', 'car': '라보'},
	{'photo': 'car12.jpg', 'car': '엑센트'},
	{'photo': 'car13.jpg', 'car': '프라이드 해치백'},
	{'photo': 'car14.jpg', 'car': '기아 프로보 컨셉트'},
	{'photo': 'car15.jpg', 'car': '아베오 세단'},
	{'photo': 'car16.jpg', 'car': '프로씨드 GT'},
	{'photo': 'car17.jpg', 'car': '쉐보레 소닉'},
	{'photo': 'car18.jpg', 'car': '그랜저'},
	{'photo': 'car19.jpg', 'car': 'K7'},
	{'photo': 'car20.jpg', 'car': '제네시스'},
	{'photo': 'car21.jpg', 'car': 'K9'},
	{'photo': 'car22.jpg', 'car': '에쿠스'},
	{'photo': 'car23.jpg', 'car': '알페온'},
	{'photo': 'car24.jpg', 'car': 'SM7'},
	{'photo': 'car25.jpg', 'car': '체어맨W 써미트'},
	{'photo': 'car26.jpg', 'car': '뉴 투싼ix'},
	{'photo': 'car27.jpg', 'car': '싼타페'},
	{'photo': 'car28.jpg', 'car': '모하비'},
	{'photo': 'car29.jpg', 'car': '맥스크루즈'}
]
































