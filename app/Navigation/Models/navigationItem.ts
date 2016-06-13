/**
 * (description)
 * 
 * @export
 * @class NavigationItems
 */
export class NavigationItem {

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
