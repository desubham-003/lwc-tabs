import { LightningElement,track } from "lwc";

export default class App extends LightningElement {

  @track openModal = false;

  activeTabStyle = "slds-tabs_scoped__content slds-show";
  inactiveTabStyle = "slds-tabs_scoped__content slds-hide";
  activeListTab = "slds-tabs_scoped__item active_tab";
  inactiveListTab = "slds-tabs_scoped__item"

  @track objectTab = {
    listTab1: "slds-tabs_scoped__item active_tab",
    contentTab1: "slds-tabs_scoped__content slds-show",
    listTab2: "slds-tabs_scoped__item",
    contentTab2: "slds-tabs_scoped__content slds-hide"
  };

  funcOpenModal(){
    this.openModal = true;
  }

  handleTabSelect(event){
    try{
    let tab = event.currentTarget.dataset.value;
    console.log(tab);
    if(tab === 't1'){
      this.objectTab.listTab2 = this.inactiveListTab;
      this.objectTab.contentTab2 = this.inactiveTabStyle;
      this.objectTab.listTab1 = this.activeListTab;
      this.objectTab.contentTab1 = this.activeTabStyle;
    }
    else if(tab === 't2'){
      this.objectTab.listTab1 = this.inactiveListTab;
      this.objectTab.contentTab1 = this.inactiveTabStyle;
      this.objectTab.listTab2 = this.activeListTab;
      this.objectTab.contentTab2 = this.activeTabStyle;
    }
    }catch(e){
      console.error(e);
    }
  }
}
