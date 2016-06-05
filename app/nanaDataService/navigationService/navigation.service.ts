import { NanaDal } from '../DAL/nana.dal';
import { OnInit } from '@angular/core';

export class NanaserviceService implements OnInit {

    private _errorMessage: string;
    private _navigations: Navigation;
    private _factoryName: string = 'service';
    private _itemID: number;

    constructor(private _dal: NanaDal) {

    }

    ngOnInit() {
        {
            this.getServices();
        }
    }

    getServices() {
        this._dal.setFactory(this._factoryName, this._itemID);
        this._dal.getItems()
            .subscribe(
            data => this._navigations = new Navigation(data),
            error => this._errorMessage = <any>error);

    }
}

export class Navigation {

    public NavigateID: number;
    public NavigationType: number;
    public NavigateName: string;
    public Status: number;
    public ServiceID: number;
    public CreateHTML: boolean;
    public IsMain: boolean;
    public ModifyDate: Date;
    public Items: NavigationItems[];

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

export class NavigationItems {

    public ItemID: number;
    public NavigateID: number;
    public BgColor: string;
    public LinkText: string;
    public LinkType: number;
    public CssID: number;
    public LinkHref: string;

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

