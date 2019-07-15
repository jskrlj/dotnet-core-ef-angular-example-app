﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webAPI.Models;

namespace webAPI.Migrations.DynForms
{
    [DbContext(typeof(DynFormsContext))]
    partial class DynFormsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("webAPI.Models.CustomFormField", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CustomFormsCollectionID");

                    b.Property<string>("controlType");

                    b.Property<string>("field_type");

                    b.Property<string>("key");

                    b.Property<string>("label");

                    b.Property<string>("order");

                    b.Property<string>("required");

                    b.Property<string>("value");

                    b.HasKey("ID");

                    b.HasIndex("CustomFormsCollectionID");

                    b.ToTable("CustomFormFields");
                });

            modelBuilder.Entity("webAPI.Models.CustomFormOption", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CustomFormFieldID");

                    b.Property<string>("key");

                    b.Property<string>("value");

                    b.HasKey("ID");

                    b.HasIndex("CustomFormFieldID");

                    b.ToTable("CustomFormOptions");
                });

            modelBuilder.Entity("webAPI.Models.CustomFormsCollection", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("name");

                    b.HasKey("ID");

                    b.ToTable("CustomFormsCollection");
                });

            modelBuilder.Entity("webAPI.Models.Field", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("FormID");

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.HasIndex("FormID");

                    b.ToTable("Fields");
                });

            modelBuilder.Entity("webAPI.Models.Form", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.ToTable("Forms");
                });

            modelBuilder.Entity("webAPI.Models.ResponseValue", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("FieldID");

                    b.Property<int?>("FormID");

                    b.Property<string>("value");

                    b.HasKey("ID");

                    b.HasIndex("FieldID")
                        .IsUnique()
                        .HasFilter("[FieldID] IS NOT NULL");

                    b.HasIndex("FormID");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("webAPI.Models.CustomFormField", b =>
                {
                    b.HasOne("webAPI.Models.CustomFormsCollection", "customFormCollection")
                        .WithMany("CustomFormFields")
                        .HasForeignKey("CustomFormsCollectionID");
                });

            modelBuilder.Entity("webAPI.Models.CustomFormOption", b =>
                {
                    b.HasOne("webAPI.Models.CustomFormField")
                        .WithMany("options")
                        .HasForeignKey("CustomFormFieldID");
                });

            modelBuilder.Entity("webAPI.Models.Field", b =>
                {
                    b.HasOne("webAPI.Models.Form", "Form")
                        .WithMany("Fields")
                        .HasForeignKey("FormID");
                });

            modelBuilder.Entity("webAPI.Models.ResponseValue", b =>
                {
                    b.HasOne("webAPI.Models.Field", "Field")
                        .WithOne("Value")
                        .HasForeignKey("webAPI.Models.ResponseValue", "FieldID");

                    b.HasOne("webAPI.Models.Form", "Form")
                        .WithMany()
                        .HasForeignKey("FormID");
                });
#pragma warning restore 612, 618
        }
    }
}
