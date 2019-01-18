using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using StyledApp_Xamarin_Sass.Views;

[assembly: XamlCompilation(XamlCompilationOptions.Compile)]
namespace StyledApp_Xamarin_Sass
{
    public partial class App : Application
    {

        public App()
        {
            InitializeComponent();


            MainPage = new MainPage();
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
