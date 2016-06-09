import { NanaDal } from '../DAL/nana.dal';
import { OnInit, Inject } from '@angular/core';


/**
 * (description)
 * 
 * @export
 * @class NanaserviceService
 * @implements {OnInit}
 */
export class NanaserviceService implements OnInit {

    /**
     * (description)
     * 
     * @type {string}
     */
    errorMessage: string;
    /**
     * (description)
     * 
     * @type {Navigation}
     */
    navigations: Navigation;

    /**
     * Creates an instance of NanaserviceService.
     * 
     * @param {NanaDal} _dal (description)
     */
    constructor( @Inject(NanaDal) private _dal: NanaDal) {
    }

    /**
     * (description)
     */
    ngOnInit() {
        {
            console.log('NanaserviceService init');
            this.getServices();
        }
    }

    /**
     * (description)
     */
    getServices() {
        // this._dal.serviceSrc = 'service';
        console.log('getServices');
        this._dal.getItems()
            .subscribe(
            data => this.navigations = new Navigation(data),
            error => this.errorMessage = <any>error);

    }
}

/**
 * Serialization class, created in order to provide only controlled properties
 * @export
 * @class Navigation
 */
/**
 * (description)
 * 
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
    public Items: NavigationItems[];

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
/**
 * (description)
 * 
 * @export
 * @class MockNavigation
 */
export class MockNavigation {
    /**
     * (description)
     * 
     * @type {number}
     */
    public NavigateID: number = 1;
    /**
     * (description)
     * 
     * @type {string}
     */
    public NavigateName: string;
}

/**
 * (description)
 * 
 * @export
 * @class NavigationItems
 */
export class NavigationItems {

    /**
     * (description)
     * 
     * @type {number}
     */
    public ItemID: number;
    /**
     * (description)
     * 
     * @type {number}
     */
    public NavigateID: number;
    /**
     * (description)
     * 
     * @type {string}
     */
    public BgColor: string;
    /**
     * (description)
     * 
     * @type {string}
     */
    public LinkText: string;
    /**
     * (description)
     * 
     * @type {number}
     */
    public LinkType: number;
    /**
     * (description)
     * 
     * @type {number}
     */
    public CssID: number;
    /**
     * (description)
     * 
     * @type {string}
     */
    public LinkHref: string;

    /**
     * Creates an instance of NavigationItems.
     * 
     * @param {*} _obj (description)
     */
    constructor(private _obj: any
        // public DisplayOrder: number,
        // public DropDown: boolean,
        // public NewWindow: boolean,
        // public ImageURL: string,
        // public Plaintext: string,
        // public FileID: number,
        // public LinkHref_Temp: string,
        // public Status: number,
        // public CssName: string,
        // public FilePath: string,
        // public LinkTextFormatted: string,
        // public PlainTextFormatted: string,
        // public Nofollow: boolean,
        // public MediaStockImageID: number,
        // public MediaStockImageTypeID: number
    ) {
        this.ItemID = _obj.ItemID;
        this.NavigateID = _obj.NavigateID;
        this.BgColor = _obj.BgColor;
        this.LinkText = _obj.LinkText;
        this.LinkType = _obj.LinkType;
        this.CssID = _obj.CssID;
        this.LinkHref = _obj.LinkHref;
    }
}

