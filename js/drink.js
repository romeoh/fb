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
	var  userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message
		,url = ''
		
		,dataDrinkRan = Math.floor(Math.random() * dataDrink.length)
		,dataMountRan = Math.floor(Math.random() * dataMount.length)
		,dataActionRan = Math.floor(Math.random() * dataAction.length)
		,postMsg = ''
	
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
	
	postMsg += userName + '님의 주량은 ' + dataDrink[dataDrinkRan]['name'] + ' ' + dataMount[dataMountRan] + '입니다.\n\n';
	postMsg += '주량: ' + dataDrink[dataDrinkRan]['name'] + ' ' + dataMount[dataMountRan] + '\n';
	postMsg += '주사: ' + dataAction[dataActionRan] + '\n\n';
	postMsg += 'http://goo.gl/EGkEK';

	
	// 로그인
	console.log(postMsg)
	/**/
	FB.login(function(response) {
		if (response.authResponse) {
			imgURL = 'http://romeoh.github.io/fb/img/' + dataDrink[dataDrinkRan]['photo'];
			FB.api('/me/photos', 'post', {
				message: postMsg,
				//access_token: accessToken, 
				url: imgURL
			}, function (response) {

				if (!response || response.error) {
					//console.log(response)
					//alert('Error occured:' + response);
				} else {
					//alert('항상 행운을 빌어요~^^');
				}
			});
		}
	}, {scope: 'publish_actions, user_photos'});

}

function setRandom(data){
	var idx = Math.floor(Math.random() * data.length)
	if (jogeun0 == undefined) {
		jogeun0 = idx;
	}
	if (jogeun1 == undefined) {
		if (jogeun0 == idx) {
			setRandom(data)
		} else {
			jogeun1 = idx;
		}
	}
	if (jogeun2 == undefined) {
		if (jogeun0 == idx || jogeun1 == idx) {
			setRandom(data)
		} else {
			jogeun2 = idx;
			return jogeun2;
		}
	}
}



dataDrink = [
	{'name':'소주', photo:'d01.jpg'},
	{'name':'맥주', photo:'d02.jpg'},
	{'name':'막걸리', photo:'d03.jpg'},
	{'name':'예거마이스터', photo:'d04.jpg'},
	{'name':'로얄살루트 21년산', photo:'d05.jpg'},
	{'name':'발렌타인 30년산', photo:'d06.jpg'},
	{'name':'잭다니엘', photo:'d07.jpg'},
	{'name':'스카치블루', photo:'d08.jpg'},
	{'name':'위스키', photo:'d09.jpg'},
	{'name':'시바스리갈', photo:'d10.jpg'}
]

dataMount = [
	'한잔',
	'두잔',
	'세잔',
	'한병',
	'두병',
	'세병',
	'네병',
	'다섯병',
	'열병',
	'한짝',
	'두짝',
	'세짝',
	'무제한'
]

dataAction = [
	'옆사람에게 뽀뽀함',
	'옆사람을 포옹함',
	'했던말 계속함',
	'엄마생각하며 울기',
	'끊임없이 웃음',
	'똥폼잡음',
	'줄담배 피기',
	'조용히 잠자기',
	'없어져서 친구들이 찾으러 다님',
	'조용히 집에감',
	'화장실에서 우엑~',
	'옆테이블에 시비걸기',
	'큰소리로 노래부름',
	'골든벨 울리기'
]










