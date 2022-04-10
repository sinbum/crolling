from operator import index, indexOf
from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen('http://www.ipostock.co.kr/sub03/ipo04.asp')
bs = BeautifulSoup(html,'html.parser')

# 본문컨텐츠
# mainContent = bs.find("div",{'id' : 'print'})

#일정테이블
# ipoContent = bs.find("div",{'id' : 'print'}).table.tr.findNextSiblings();
#ipoContentList = bs.find("div",{'id' : 'print'}).table.tr.td.table.tbody

#컬럼 속성명
columnNames = bs.find_all("td",{'class' : 'ttit01'})

# for name in columnNames:
    # print('-------------------------------------시작-------------------------------------------------')
    # print(name.get_text())
    # print('--------------------------------------끝------------------------------------------------')


#IPO데이터 객체까지 중간완료 
ipoContentList = bs.find("td",{'class' : 'ttit01'}).parent.parent.parent.parent.parent.find("tr").next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.find('table')





for ipoData in ipoContentList:
    
   # print(ipoData.find('font'))
    if ipoData.find('font') == -1 or ipoData.find('font') == None:        
        #print('인덱스번호',ipoContentList.index(ipoData))
        del ipoContentList[ipoContentList.index(ipoData)]
    
 
    # if ipoData.find('font') == -1 or ipoData.find('font') == 'None' :
    #     #del ipoContentList[ipoContentList.index(ipoData)]
    #     print(ipoContentList.index(ipoData))
    
    #print('-------------------------------------시작-------------------------------------------------')
    #print(ipoData.find('font'))
    #print('--------------------------------------끝------------------------------------------------')
    
    
print(len(ipoContentList))
    
#print(ipoContentList[1])
# for 객체 in 데이터 :
#     print(데이터.index(객체))
#     print(객체)


    







# IpoContent = bs.body.table.tbody.tr.td.table.tobdy.tr.td.div.table.tbody.tr.td.table

