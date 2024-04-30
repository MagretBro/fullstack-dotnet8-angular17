# fullstack-dotnet8-angular17
Create api for angular project

1) git - create repository
2) download visual studio code

-- API
3) download .net
4) dotnet --list-sdks #look version
5) In VSC go to "extensions" to choose:
    C#
    C# Dev Kit
    NuGet Gallery

6) console: 
dotnet new webapi -o Api
cd Api
dotnet watch run

7) Program.cs # 2DEL unnecessary
8) Create Models (Api level)
        - classes (Student.cs)      # create structure 
9) Create Data -> AppDbContext.cs
10) nutget -> cmd+shift+p -> ef core
                          -> ef core.tools
11) program.cs - точка входа в App, файл где прописаны настройки сервиса, обработчика запросов, загрузка конфигурацион данных из appsettings.json
в program.cs добавляем (Add services to the container.)
builder.Services.AddDbContext    
                   
12) for DB -> nuget => microsoft.entityFrameworkCore.Sglite - install
13) appsettings.json - настройка подключения к БД
прописываем параметры для ASP.NET Core 
AllowedHosts - * - все
ConnectionStrings - свою БД student.db





-- Frontend

 Material Icon Theme






