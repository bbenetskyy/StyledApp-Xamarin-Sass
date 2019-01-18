using System;

using StyledApp_Xamarin_Sass.Models;

namespace StyledApp_Xamarin_Sass.ViewModels
{
    public class ItemDetailViewModel : BaseViewModel
    {
        public Item Item { get; set; }
        public ItemDetailViewModel(Item item = null)
        {
            Title = item?.Text;
            Item = item;
        }
    }
}
