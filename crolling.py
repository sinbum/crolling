from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen('http://www.pythonscraping.com/pages/page3.html')
bs = BeautifulSoup(html,'html.parser')

# nameList = bs.findAll('span',{'class':'green'})
# for name in nameList:
#     print(name.get_text())


# 테이블 데이터 가져오기
# for child in bs.find('table',{'id' : 'giftList'}).children:
#     print(child)