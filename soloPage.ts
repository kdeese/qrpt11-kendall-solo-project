import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class kendallSolo extends BasePage {
    //selectors
  //NBAFINALS TEST
  nbaFinals: By=By.xpath('//li[@class="NavItem_item__Gokj_"][6]')
  summaryNBAFinals: By=By.xpath('//li[@aria-haspopup="false"][3]')
  statsFinals: By=By.xpath('//li[@aria-haspopup="false"][4]')
  finalsNews: By=By.xpath('//li[@aria-haspopup="false"][5]')
  moreMenu: By=By.xpath('//li[@aria-haspopup="true"][16]')
  playoffs2023: ??????
  play-InTournament: ???????
  
  //keydates
  scheduleHeader: By=By.xpath('//li[@class="NavItem_item__Gokj_"][2]')

  //serieslatest
  
  
  //NW division team test
  allTeams: By.By.xpath('//li[@class="NavItem_item__Gokj_"][9]')
  denverNuggets: By.By.xpath('//div[@class="TeamFigure_tf__jA5HW"][16]')
  minnesotaTimberwolves: By.By.xpath
  okcThunder: By.By.xpath
  portlandTrailBlazers:
  utahJazz:
  
  //stats leaders test case
  statsHheader: By=By.xpath('//li[@class="NavItem_item__Gokj_"][7]')
  
    


}

    //constructor
    constructor () {
        super ({url:"https://www.nba.com/"})
    }