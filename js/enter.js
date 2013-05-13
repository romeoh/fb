var  userName = document.querySelector('#userName')
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale

btnStory.addEventListener('click', goLink, false);
btnKakao.addEventListener('click', executeURLLink, false);
boySelect.addEventListener('click', function(){
	boySelect.className = 'checked';
	girlSelect.className = '';
}, false);
girlSelect.addEventListener('click', function(){
	boySelect.className = '';
	girlSelect.className = 'checked';
}, false);


// go Link
function goLink(){
	var  sexType
		,url = ''
	

	//idx < 10 ? idx = '0' + idx : idx
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	if (userName.value == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	//남자를 선택함
	if (boySelect.className == 'checked') {
		resultName = getRand(dataMale)['name']
		resultPhoto = getRand(dataMale)['photo']
		message = '커피한잔 사주실래요?';
	
	// 여자를 선택함
	} else if (girlSelect.className == 'checked') {
		resultName = getRand(dataFemale)['name']
		resultPhoto = getRand(dataFemale)['photo']
		message = '커피한잔 사주실래요?';
		message = '커피한잔 마실래요?';
	}
	

	fburl = 'https://www.facebook.com/dialog/feed'
	appId = '519730578083610'
	link = 'http://romeoh.github.io/fb/html/test.html'
	pic = 'http://romeoh.github.io/kakaoStory/img/alpha0.jpg'
	appName = 'myName'
	catption = '백국경'
	description = 'myDescript'
	display = 'touch'
	redirect = 'http://romeoh.github.io/fb/html/test.html'

	url += fburl + '?'
	url += 'app_id=' + appId + '&'
	url += 'link=' + link + '&'
	url += 'picture=' + pic + '&'
	url += 'name=' + encodeURIComponent(appName) + '&'
	url += 'caption=' + encodeURIComponent(catption) + '&'
	url += 'description=' + encodeURIComponent(description) + '&'
	url += 'display=' + display + '&'
	url += 'redirect_uri=' + redirect
	
	top.location.href = url

}

function getRand(data){
	var  dataLength = data.length
		,ran = Math.floor(Math.random() * dataLength);
	return data[ran];
}

dataMale = [
	{'name': '강민경', 'photo': 'f01.jpeg', 'msg':''},
	{'name': '정유미', 'photo': 'f02.jpeg', 'msg':''},
	{'name': '가인',  'photo': 'f03.jpeg', 'msg':''},
	{'name': '고준희', 'photo': 'f04.jpeg', 'msg':''},
	{'name': '김현아', 'photo': 'f05.jpeg', 'msg':''},
	{'name': '이유비', 'photo': 'f06.jpeg', 'msg':''},
	{'name': '태연',  'photo': 'f07.jpeg', 'msg':''},
	{'name': '임수향', 'photo': 'f08.jpeg', 'msg':''},
	{'name': '박은지', 'photo': 'f09.jpeg', 'msg':''},
	{'name': '한선화', 'photo': 'f10.jpeg', 'msg':''},
	{'name': '박초롱', 'photo': 'f11.jpeg', 'msg':''},
	{'name': '오인혜', 'photo': 'f12.jpeg', 'msg':''},
	{'name': '이연희', 'photo': 'f13.jpeg', 'msg':''},
	{'name': '신세경', 'photo': 'f14.jpeg', 'msg':''},
	{'name': '정은채', 'photo': 'f15.jpeg', 'msg':''},
	{'name': '한효주', 'photo': 'f16.jpeg', 'msg':''},
	{'name': '박보영', 'photo': 'f17.jpeg', 'msg':''},
	{'name': '신보라', 'photo': 'f18.jpeg', 'msg':''},
	{'name': '박봄',  'photo': 'f19.jpeg', 'msg':''},
	{'name': '한지혜', 'photo': 'f20.jpeg', 'msg':''},
	{'name': '백아연', 'photo': 'f21.jpeg', 'msg':''},
	{'name': '김하은', 'photo': 'f22.jpeg', 'msg':''},
	{'name': '에일리', 'photo': 'f23.jpeg', 'msg':''},
	{'name': '고두림', 'photo': 'f24.jpeg', 'msg':''},
	{'name': '제시카', 'photo': 'f25.jpeg', 'msg':''},
	{'name': '윤아',  'photo': 'f26.jpeg', 'msg':''},
	{'name': '로지', 'photo': 'f27.jpeg', 'msg':''},
	{'name': '박은빈', 'photo': 'f28.jpeg', 'msg':''},
	{'name': '이태림', 'photo': 'f29.jpeg', 'msg':''},
	{'name': '유빈', 'photo': 'f30.jpeg', 'msg':''},
	{'name': '김재경', 'photo': 'f31.jpeg', 'msg':''},
	{'name': '김효진', 'photo': 'f32.jpeg', 'msg':''},
	{'name': '민효린', 'photo': 'f33.jpeg', 'msg':''},
	{'name': '민지아', 'photo': 'f34.jpeg', 'msg':''},
	{'name': '소진', 'photo': 'f35.jpeg', 'msg':''},
	{'name': '이다해', 'photo': 'f36.jpeg', 'msg':''},
	{'name': '윤은혜', 'photo': 'f37.jpeg', 'msg':''},
	{'name': '유이', 'photo': 'f38.jpeg', 'msg':''},
	{'name': '신소율', 'photo': 'f39.jpeg', 'msg':''},
	{'name': '강소라', 'photo': 'f40.jpeg', 'msg':''},
	{'name': '유하나', 'photo': 'f41.jpeg', 'msg':''},
	{'name': '전효성', 'photo': 'f42.jpeg', 'msg':''},
	{'name': '한소영', 'photo': 'f43.jpeg', 'msg':''},
	{'name': '김보미', 'photo': 'f44.jpeg', 'msg':''},
	{'name': '은정',  'photo': 'f45.jpeg', 'msg':''},
	{'name': '손성윤', 'photo': 'f46.jpeg', 'msg':''},
	{'name': '김보경', 'photo': 'f47.jpeg', 'msg':''},
	{'name': '고아라', 'photo': 'f48.jpeg', 'msg':''},
	{'name': '보람',  'photo': 'f49.jpeg', 'msg':''},
	{'name': '수지',  'photo': 'f50.jpg', 'msg':''}
]

dataFemale = [
	{'name': '정석원', 'photo': 'm01.jpeg', 'msg':''},
	{'name': '이승기', 'photo': 'm02.jpeg', 'msg':''},
	{'name': '홍대광', 'photo': 'm03.jpeg', 'msg':''},
	{'name': '유연석', 'photo': 'm04.jpeg', 'msg':''},
	{'name': '이현우', 'photo': 'm05.jpeg', 'msg':''},
	{'name': '서인국', 'photo': 'm06.jpeg', 'msg':''},
	{'name': '황광희', 'photo': 'm07.jpeg', 'msg':''},
	{'name': '유아인', 'photo': 'm08.jpeg', 'msg':''},
	{'name': '최진혁', 'photo': 'm09.jpeg', 'msg':''},
	{'name': '김수현', 'photo': 'm10.jpeg', 'msg':''},
	{'name': '미르', 'photo': 'm11.jpeg', 'msg':''},
	{'name': '박재범', 'photo': 'm12.jpeg', 'msg':''},
	{'name': '송중기', 'photo': 'm13.jpeg', 'msg':''},
	{'name': '주원', 'photo': 'm14.jpeg', 'msg':''},
	{'name': '이민호', 'photo': 'm15.jpeg', 'msg':''},
	{'name': '이종석', 'photo': 'm16.jpeg', 'msg':''},
	{'name': '윤시윤', 'photo': 'm17.jpeg', 'msg':''},
	{'name': '시완', 'photo': 'm18.jpeg', 'msg':''},
	{'name': '연우진', 'photo': 'm19.jpeg', 'msg':''},
	{'name': '김민찬', 'photo': 'm20.jpeg', 'msg':''},
	{'name': '김현중', 'photo': 'm21.jpeg', 'msg':''},
	{'name': '이수혁', 'photo': 'm22.jpeg', 'msg':''},
	{'name': '박기웅', 'photo': 'm23.jpeg', 'msg':''},
	{'name': '정진운', 'photo': 'm24.jpeg', 'msg':''},
	{'name': '이광수', 'photo': 'm25.jpeg', 'msg':''},
	{'name': '종현', 'photo': 'm26.jpeg', 'msg':''},
	{'name': '정용화', 'photo': 'm27.jpeg', 'msg':''},
	{'name': '이홍기', 'photo': 'm28.jpeg', 'msg':''},
	{'name': '윤두준', 'photo': 'm29.jpeg', 'msg':''},
	{'name': '김기리', 'photo': 'm30.jpeg', 'msg':''},
	{'name': '안재현', 'photo': 'm31.jpeg', 'msg':''},
	{'name': '박형식', 'photo': 'm32.jpeg', 'msg':''},
	{'name': '곽정운', 'photo': 'm33.jpeg', 'msg':''},
	{'name': '유천', 'photo': 'm34.jpeg', 'msg':''},
	{'name': '민호', 'photo': 'm35.jpeg', 'msg':''},
	{'name': '이제훈', 'photo': 'm36.jpeg', 'msg':''},
	{'name': '택연', 'photo': 'm37.jpeg', 'msg':''},
	{'name': '최우식', 'photo': 'm38.jpeg', 'msg':''},
	{'name': '임슬옹', 'photo': 'm39.jpeg', 'msg':''},
	{'name': '백성현', 'photo': 'm40.jpeg', 'msg':''},
	{'name': '김동준', 'photo': 'm41.jpeg', 'msg':''},
	{'name': '용준형', 'photo': 'm42.jpeg', 'msg':''},
	{'name': '홍종현', 'photo': 'm43.jpeg', 'msg':''},
	{'name': '이성열', 'photo': 'm44.jpeg', 'msg':''},
	{'name': '김혜성', 'photo': 'm45.jpeg', 'msg':''},
	{'name': '호야', 'photo': 'm46.jpeg', 'msg':''},
	{'name': '박서준', 'photo': 'm47.jpeg', 'msg':''},
	{'name': '김범', 'photo': 'm48.jpeg', 'msg':''},
	{'name': '류덕환', 'photo': 'm49.jpeg', 'msg':''},
	{'name': '노민우', 'photo': 'm50.jpg', 'msg':''}
]

