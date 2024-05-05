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
    NuGet Gallery       cmd + shift + p

6) console: 
dotnet new webapi -o Api
cd Api
dotnet watch run

7) Program.cs # 2DEL unnecessary
8) Create Models (Api level)
        - classes (Student.cs)      # create structure 
9) Create Data -> AppDbContext.cs
Внутри него создаю конструктор - ctor
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

14) program.cs - соединение с БД
builder.Services.AddDbContext<AppDbContext>(options=>options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

15) Create Controller в котором будут прописаны методы Get, Post, Delete, 
16) Добавляем в program.cs метод AddControllers()
17) add app.MapControllers() в program.cs 
app.MapControllers() ASP.NET Core настраивает маршруты для всех контроллеров, зарегистрированных в приложении, и связывает их с соответствующими обработчиками запросов
18) restart api
19) Когда вы добавляете свойство DbSet<Student> Students в AppDbContext, EF Core использует его для создания таблицы Students в вашей базе данных. Кроме того, он предоставляет методы для выполнения CRUD-операций (Create, Read, Update, Delete) над данными этой таблицы.

20) миграция бд. Terminal: dotnet ef migrations add Initial
если ошибка - 
dotnet tool install --global dotnet-ef
dotnet ef migrations add Initial

21) создаем ДБ
dotnet ef database update

22) extensions -> sqlite -> install
23) cmd + shift + p -> sqlite open database -> выбор БД 
24) должен появиться sqlite explorer - там БД
25) инициализируем БД: dotnet ef database update
26) в studentsController создаем конструктор (ctor)
26) Прописываем метод HttpGet

27) Открытие sql explorer - Для влючение sql DB - cmd+shift+P - выбор SQLite - выбор нужной BD

FRONTEND

28) Download Nodejs 20
29) npm install -g @angular/cli         это глобально--
npm install @angular/cli --save-dev     это локально 
Установка 17 версии
30) add
Angular langyage Service
Angular Schematics
Angular File Changer
Material Icon Theme

В отдельном баше
31) ng new client

установка Tailwind  и его расширений
https://tailwindcss.com/docs/installation

32) Создание компонентов и объектов - Service, Students, types
33)  ng g c students --standalone --dry-run









