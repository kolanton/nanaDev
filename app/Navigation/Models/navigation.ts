import {NavigationItem} from './navigationItem';
/**
 * Serialization class, created in order to provide only controlled properties
 * @export
 * @class Navigation
 */
export class Navigation {

    /**
     * (description)
     * 
     * @type {number}
     */
    public NavigateID: number;
    /**
     * (description)
     * 
     * @type {number}
     */
    public NavigationType: number;
    /**
     * (description)
     * 
     * @type {string}
     */
    public NavigateName: string;
    /**
     * (description)
     * 
     * @type {number}
     */
    public Status: number;
    /**
     * (description)
     * 
     * @type {number}
     */
    public ServiceID: number;
    /**
     * (description)
     * 
     * @type {boolean}
     */
    public CreateHTML: boolean;
    /**
     * (description)
     * 
     * @type {boolean}
     */
    public IsMain: boolean;
    /**
     * (description)
     * 
     * @type {Date}
     */
    public ModifyDate: Date;
    /**
     * (description)
     * 
     * @type {NavigationItems[]}
     */
    public Items: NavigationItem[];

    /**
     * Creates an instance of Navigation.
     * 
     * @param {*} _obj (description)
     */
    constructor(_obj: any) {
        this.NavigateID = _obj.NavigateID;
        this.NavigateName = _obj.NavigateName;
        // this.NavigationType = _obj.NavigationType;
        // this.Status = _obj.Status;
        // this.ServiceID = _obj.ServiceID;
        // this.CreateHTML = _obj.CreateHTML;
        // this.IsMain = _obj.IsMain;
        // this.ModifyDate = _obj.ModifyDate;

        // for (var i in _obj.NavigationItems) {
        //   let item = new NavigationItems(_obj.NavigationItems[i]);
        // }
    }
}